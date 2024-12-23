#!/usr/bin/env node
import readlineSync from 'readline-sync';

const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateQuestion = () => {
  const num1 = generateRandomNumber(1,100);
  const num2 = generateRandomNumber(1,100);
  const operators = ['+', '-', '*'];
  const operator = operators[generateRandomNumber(0, operators.length - 1)];
  let correctAnswer;

  switch (operator) {
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '-':
      correctAnswer = num1 - num2;
      break;
    case '*':
      correctAnswer = num1 * num2;
      break;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }

  return {
    question: `${num1} ${operator} ${num2}`,
    correctAnswer: String(correctAnswer),
  };
};

const playGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');

  const rounds = 3; 
  for (let i = 0; i < rounds; i++) {
    const { question, correctAnswer } = generateQuestion();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

playGame();