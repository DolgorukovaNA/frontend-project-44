#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {getName} from "../bin/src/cli.js";

console.log('Welcome to the Brain Games!');
const name = getName();
console.log(`Hello,${name}!`);
