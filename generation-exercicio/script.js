const prompt = require('prompt-sync')();
const imc = require('./function');

const peso = parseInt(prompt('Qual é o seu peso?'));
const altura = parseFloat(prompt("Qual é a sua altura?"));

imc (peso, altura);