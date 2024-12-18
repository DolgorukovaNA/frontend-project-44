#!/usr/bin/env node
import {getName} from "../bin/src/cli.js";
console.log('Welcome to the Brain Games!');
const name = getName();
console.log(`Hello,${name}!`);
console.log ('Answer "yes" if the number is even, otherwise answer "no".');