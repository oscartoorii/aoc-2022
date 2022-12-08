import * as fs from 'fs';
import * as path from "path";

const inputFile: string = path.resolve(__dirname, 'input.csv');
let inputData: Array<number> = [];
try {
    const data: string = fs.readFileSync(inputFile, 'utf8')
    inputData = data.split("\r\n").map((e) => parseInt(e))
} catch (err) {
    console.error(err)
}
console.log(inputData)

/////////////////////// ANSWER ///////////////////////

let maxVal: number = 0;
let currentVal: number = 0;
for (let calories of inputData) {
    if(isNaN(calories)){
        if (currentVal > maxVal) {
            maxVal = currentVal;
        }
        currentVal = 0;
    } else {
        currentVal += calories;
    }
}

console.log(maxVal)