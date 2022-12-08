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

const score = (letter: string): number => {
    if (letter === "A" || letter === "X") {
        return 1; // Rock
    } if (letter === "B" || letter === "Y") {
        return 2; // Paper
    } if (letter === "C" || letter === "Z") {
        return 3; // Scissors
    }
}

for (let match of inputData) {
    // Score from your choice
    totalScore += score(match[1])
    // Score from game outcome
    if (score(match[1]) === score(match[0])) {
        totalScore += 3; // Draw
    } else if (score(match[1]) === 1 && score(match[0]) === 3) {
        totalScore += 6; // Win
    } else if (score(match[1]) === 2 && score(match[0]) === 1) {
        totalScore += 6; // Win
    } else if (score(match[1]) === 3 && score(match[0]) === 2) {
        totalScore += 6; // Win
    }
}

console.log(totalScore)