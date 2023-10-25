const data = require('./database');

function isAndroide(input){
    let names = [];
    if(data.species.some((specie) => specie.name === input) === true){
        let findId = data.species.find((findId) => findId.name === input);
        for(let index = 0; index < data.characters.length; index += 1){
            if(findId.id === data.characters[index].speciesId){
                names.push(data.characters[index].name);
            }
        }
    }
    else{
        return false;
    }
    return names;
};

console.log(isAndroide("Saiyans"));