const data = require('./database');

function getCharacterBySpecie(id){
    return data.characters.find((character) => character.speciesId === id)};

console.log(getCharacterBySpecie(1));