import { IblFile } from './index'
import * as fs from 'node:fs'

let f = fs.readFileSync('./test.ibl')

let file = new IblFile()

let es = file.parseInputSync(f) /*.then(() => {
    console.log("done")
    parsed = true
}).catch((err) => {
    console.error(err)
    parsed = true
}).finally(() => {
    console.log("finally")
    parsed = true
})*/

for(let e of es) {
    console.log(e.fileName)
}