// Decodes a LZW-encoded buffer (LSB first)
// Taken from https://cs.opensource.google/go/go/+/refs/tags/go1.21.3:src/compress/lzw/reader.go;l=254

const maxWidth = 12
const decoderInvalidCode = 0xffff
const flushBuffer = 1 << maxWidth

// IO primitive
export enum IOErrors {
    EOF = "EOF",
    UnexpectedEOF = "unexpected EOF"
}

export enum Order {
    LSB,
    MSB
}

// io.ByteReader from Golang [https://cs.opensource.google/go/go/+/refs/tags/go1.21.3:src/compress/lzw/reader.go;l=48]
export class ByteWReader {
    private buf: Uint8Array

    constructor(buf: Uint8Array) {
        this.buf = buf
    }

    // getBuffer returns the buffer
    // Not present in Go
    jsGetInnerArray(): Uint8Array {
        return this.buf
    }

    jsConcat(buf: Uint8Array) {
        this.buf = Uint8Array.from([...this.buf, ...buf])
    }

    // readByte reads the next byte from the input buffer.
    // Equivalent to r.ReadByte() in io.ByteReader
    ReadByte(): [number, Error | null] {
        if (this.buf.length == 0) {
            return [0, new Error(IOErrors.EOF)]
        }

        let b = this.buf[0]
        this.buf = this.buf.subarray(1)
        return [b, null]
    }

    // Copy copies bytes from src to dst. It returns the number of bytes copied
    // Equivalent to copy in Go
    Copy(bytes: number[]): number {
        this.buf = Uint8Array.from([...this.buf, ...bytes])
        return bytes.length
    }
}

export class LZWReader {
    r: ByteWReader
    bits: number = 0 // uint32
    nBits: number = 0// uint
    width: number = 0 // uint
    litWidth: number = 0 // uint

	// The first 1<<litWidth codes are literal codes.
	// The next two codes mean clear and EOF.
	// Other valid codes are in the range [lo, hi] where lo := clear + 2,
	// with the upper bound incrementing on each code seen.
	//
	// overflow is the code at which hi overflows the code width. It always
	// equals 1 << width.
	//
	// last is the most recently seen code, or decoderInvalidCode.
	//
	// An invariant is that hi < overflow.
    clear: number = 0 // uint
    eof: number = 0 // uint
    hi: number = 0 // uint
    overflow: number = 0 // uint
    last: number = 0 // uint

    err: Error | undefined // Error in the stream, if any

	// Each code c in [lo, hi] expands to two or more bytes. For c != hi:
	//   suffix[c] is the last of these bytes.
	//   prefix[c] is the code for all but the last byte.
	//   This code can either be a literal code or another code in [lo, c).
	// The c == hi case is a special case.
    suffix: number[] = [] // [1 << maxWidth]uint8
    prefix: number[] = [] // [1 << maxWidth]uint16

	// output is the temporary output buffer.
	// Literal codes are accumulated from the start of the buffer.
	// Non-literal codes decode to a sequence of suffixes that are first
	// written right-to-left from the end of the buffer before being copied
	// to the start of the buffer.
	// It is flushed when it contains >= 1<<maxWidth bytes,
	// so that there is always room to decode an entire code.
    output: number[] = [] // [1 << maxWidth]byte
    o = 0 // write index into output
    toRead: number[] = [] // bytes to return from Read

    // Not present in the go code
    order: Order = Order.LSB // uint

    constructor(src: ByteWReader, order: Order, litWidth: number) {        
        if(litWidth < 2 || 8 < litWidth) {
            throw new Error("lzw: litWidth out of range")
        }

        this.order = order
        this.r = src
        this.litWidth = litWidth
        this.width = 1 + litWidth
        this.clear = 1 << litWidth
        this.eof = this.clear + 1 // r.eof, r.hi = r.clear+1, r.clear+1
        this.hi = this.clear + 1
        this.overflow = 1 << this.width
        this.last = decoderInvalidCode   
        
        // Set up the initial slices [js specific]
        this.suffix = Array.from({ length: 1 << maxWidth }, () => 0)
        this.prefix = Array.from({ length: 1 << maxWidth }, () => 0)
        this.output = Array.from({ length: 2 * (1 << maxWidth) }, () => 0)
    }

    // Not present in the Go code
    //
    // readLSB or readMSB
    //
    // This is slightly more idiomatic than defining a function in the class
    private read(): [number /* uint16 */, Error | null] {
        switch (this.order) {
            case Order.LSB:
                return this.readLSB()
            case Order.MSB:
                return this.readMSB()
            default:
                return [0, new Error("lzw: invalid order")]
        }
    }

    // readLSB returns the next code for "Least Significant Bits first" data.
    private readLSB(): [number /* uint16 */, Error | null] {
        while (this.nBits < this.width) {
            let [x, err] = this.r.ReadByte()

            if (err) {
                return [0, err]
            }

            this.bits |= (x << this.nBits)
            this.nBits += 8
        }

        let code = this.bits & ((1<<this.width) - 1)
        this.bits >>= this.width
        this.nBits -= this.width
        return [code, null]
    }

    // readMSB returns the next code for "Most Significant Bits first" data.
    private readMSB(): [number /* uint16 */, Error | null] {
        while (this.nBits < this.width) {
            let [x, err] = this.r.ReadByte()

            if (err) {
                return [0, err]
            }

            this.bits |= (x) << (24 - this.nBits)

            this.nBits += 8
        }

        let code = this.bits >> (32 - this.width)
        this.bits <<= this.width
        this.nBits -= this.width
        return [code, null]
    }

    // The Read function is not implemented here the same way as it is Go-specific
    //
    // Read implements io.Reader, reading uncompressed bytes from its underlying Reader.
    Read(buf: ByteWReader): [number /* int */, Error | null] {
        while(true) /* for */ {
            if(this.toRead.length > 0) {
                // Copy bytes from the output buffer to buf.
                let n = buf.Copy(this.toRead) // n := copy(b, r.toRead)
                this.toRead = this.toRead.slice(n) // r.toRead = r.toRead[n:]
                return [n, null]
            }

            if(this.err) {
                return [0, this.err]
            }

            this.decode()
        }
    }

    // decode decompresses bytes from r and leaves them in d.toRead.
    // read specifies how to decode bytes into codes.
    // litWidth is the width in bits of literal codes.
    private decode() {
        // Loop over the code stream, converting codes into decompressed bytes.
        loop: while(true) /* for */ {
            let [code, err] = this.read()

            if(err) {
                // Check for EOF
                if(err.message == IOErrors.EOF) {
                    err = new Error(IOErrors.UnexpectedEOF)
                }
                this.err = err
                break
            }

            /* switch { */
            if(code < this.clear) {
                // We have a literal code
                this.output[this.o] = code
                this.o++

                if(this.last != decoderInvalidCode) {
                    // Save what the hi code expands to.
                    this.suffix[this.hi] = code
                    this.prefix[this.hi] = this.last    
                }
            } else if(code == this.clear) {
                this.width = 1 + this.litWidth
                this.hi = this.eof
                this.overflow = (1 << this.width)
                this.last = decoderInvalidCode
                continue    
            } else if(code == this.eof) {
                this.err = new Error(IOErrors.EOF)
                break loop
            } else if(code <= this.hi) {
                let [c, i] = [code, this.output.length - 1] // c, i := code, len(r.output)-1
                if(code == this.hi && this.last != decoderInvalidCode) {
                    // code == hi is a special case which expands to the last expansion
                    // followed by the head of the last expansion. To find the head, we walk
                    // the prefix chain until we find a literal code.
                    c = this.last
                    while(c >= this.clear) {
                        c = this.prefix[c]
                    }
                    this.output[i] = c
                    i--
                    c = this.last    
                }
                // Copy the suffix chain into output and then write that to w.
                while(c >= this.clear) {
                    this.output[i] = this.suffix[c]
                    i--
                    c = this.prefix[c]
                }
                this.output[i] = c
                // copy(r.output[r.o:], r.output[i:]) in JS
                let srcArray = this.output.slice(i)
                for(let i = 0; i < srcArray.length; i++) {
                    this.output[this.o + i] = srcArray[i]
                }
                this.o += srcArray.length
                // End: copy

                if (this.last != decoderInvalidCode) {
                    // Save what the hi code expands to.
                    this.suffix[this.hi] = c
                    this.prefix[this.hi] = this.last
                }    
            } else {
                this.err = new Error("lzw: invalid code")
                break loop
            }
        
            // https://cs.opensource.google/go/go/+/refs/tags/go1.21.3:src/compress/lzw/reader.go;l=201
            this.last = code
            this.hi++

            if(this.hi >= this.overflow) {
                if(this.hi > this.overflow) {
                    throw new Error("Unreachable") // panic("unreachable")
                }

                if(this.width == maxWidth) {
                    this.last = decoderInvalidCode
                    // Undo the d.hi++ a few lines above, so that (1) we maintain
                    // the invariant that d.hi < d.overflow, and (2) d.hi does not
                    // eventually overflow a uint16.
                    this.hi--
                } else {
                    this.width++
                    this.overflow = (1 << this.width)
                }
            }

            if(this.o >= flushBuffer) {
                break
            }    
        }

        // Flush pending output
        this.toRead = this.output.slice(0, this.o)
        this.o = 0        
    }

    // Close closes the Reader and returns an error for any future read operation.
    // It does not close the underlying io.Reader.
    close(): [Error | null] {
        this.err = new Error("lzw: reader/writer is closed")
        return [null]
    }
}