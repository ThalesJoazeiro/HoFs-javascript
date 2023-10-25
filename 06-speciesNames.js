const data = require('./database');

function speciesNames(){
    return data.species.reduce((prev, curr) => {
        return [...prev, curr.name];
    }, [])
}

console.log(speciesNames());