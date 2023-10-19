const data = require('./database');
let soma = 0;

data.characters.forEach((personagem) => soma += 1);

console.log(soma);