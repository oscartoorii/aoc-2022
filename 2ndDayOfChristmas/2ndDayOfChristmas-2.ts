import * as fs from 'fs';
import * as path from "path";

const inputFile: string = path.resolve(__dirname, 'input.csv');
let inputData: Array<Array<string>> = [];
try {
    const data: string = fs.readFileSync(inputFile, 'utf8')
    inputData = data.split("\r\n").map((e) => e.split(" "))
} catch (err) {
    console.error(err)
}
console.log(inputData)

/////////////////////// ANSWER ///////////////////////

let totalScore: number = 0;

const scoreMap = (opponentLetter: string): number => {
    if (opponentLetter === "A") {
        return 1;
    } else if (opponentLetter === "B") {
        return 2;
    } else if (opponentLetter === "C") {
        return 3;
    }
}

for (let match of inputData) {
    if (match[1] === "X") { // Loss
        // 1 -> 3, 2 -> 1, 3 -> 2
        totalScore += (scoreMap(match[0]) + 1) % 3 + 1
    } else if (match[1] === "Y") { // Draw
        totalScore += 3
        totalScore += scoreMap(match[0])
    } else if (match[1] === "Z") { // Win
        totalScore += 6
        // 1 -> 2, 2 -> 3, 3 -> 1
        totalScore += (scoreMap(match[0]) % 3) + 1
    }
}

console.log(totalScore)