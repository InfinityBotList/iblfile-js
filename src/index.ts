import { Tarball, AsyncUint8Array } from '@obsidize/tar-browserify';
import { ByteWReader, IOErrors, LZWReader, Order } from './lzwGo';

export class IblFile {
    sections: { [key: string]: Uint8Array }

    constructor() {
        this.sections = {}
    }

    private lzwDecompress(compressed: Uint8Array) {
        let lzwReader = new LZWReader(new ByteWReader(compressed), Order.LSB, 8)
        let bufs: Uint8Array[] = []
        
        while(true) {
            let tmpBuf = new ByteWReader(Uint8Array.from([]))
            let [n, err] = lzwReader.Read(tmpBuf)

            //console.debug("Read", n, "bytes")

            bufs.push(tmpBuf.jsGetInnerArray())

            if (err) {
                if(err.message == IOErrors.EOF) {
                    let finalBuf = new Uint8Array(bufs.reduce((acc, cur) => acc + cur.length, 0))
                    let offset = 0

                    for(let buf of bufs) {
                        finalBuf.set(buf, offset)
                        offset += buf.length
                    }

                    return finalBuf
                }
                throw err
            }
        }
    }

    parseInputSync(blob: Uint8Array) {
        //console.debug("LZW-Decompress")
        let lzwDecompressed = this.lzwDecompress(blob)

        //console.debug(JSON.stringify(Array.from(lzwDecompressed)))

        /*let asyncBuffer: AsyncUint8Array = {
            byteLength: async () => {
                console.log("Get byte length", lzwDecompressed.length)
                return lzwDecompressed.length
            },
            read: async (offset: number, length: number) => {
                console.log(`Read ${length} bytes at offset ${offset}`)
                return lzwDecompressed.subarray(offset, offset + length)
            }
        }*/
        
        const entriesFromBigFile = Tarball.extract(lzwDecompressed);

        return entriesFromBigFile
    }
}

