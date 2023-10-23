const data = require('./database');

const ordered = data.characters.sort((a, b) => a.name.localeCompare(b.name));

console.log(ordered);