#!/usr/bin/env node
import {getName} from "../bin/src/cli.js";
import readlineSync from 'readline-sync';

const isEven = (num) => num % 2 === 0;

const playGame = () => {
    console.log('Welcome to the Brain Games!');
    const name = getName();
    console.log(`Hello,${name}!`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    const rounds = 3;
    for(let i = 0; i < rounds; i++) {
        const question = Math.floor(Math.random() * 100) + 1;
        console.log(`Question: ${question}`);
        const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
    
        const correctAnswer = isEven(question) ? 'yes' : 'no';
        if (userAnswer === correctAnswer) {
            console.log('Correct!');
        }
        else {
            console.log(`"${userAnswer}" is wrong answer ;(. "${correctAnswer}".`);
            console.log(`Let's try again, ${name}!`);
            return;
        }
    }
        console.log(`Congratulations, ${name}!`);
    };
     
    playGame();



