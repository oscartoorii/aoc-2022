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

let summedCalories: Array<number> = []
let currentVal: number = 0;
for (let calories of inputData) {
    if(isNaN(calories)){
        summedCalories.push(currentVal)
        currentVal = 0;
    } else {
        currentVal += calories;
    }
}

const sortedCalories: Array<number> = summedCalories.sort().reverse()
const top3Calories: number = sortedCalories[0] + sortedCalories[1] + sortedCalories[2]

console.log(top3Calories)