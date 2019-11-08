import { readFileSync } from "fs";
(() => {
    const a: number = 1;
    let data:string = readFileSync('./index.js').toString();
    console.log(data)
})();