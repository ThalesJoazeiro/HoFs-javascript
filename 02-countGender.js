const data = require('./database');

function countGender(gender){
    if(gender === 'M' || gender === 'F'){
        return data.characters.filter((character) => character.gender === gender)
        .length;
    }
    else{
        return 'Valor inválido';
    };
}

console.log(countGender('M'));