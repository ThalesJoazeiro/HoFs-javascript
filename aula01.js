//FUNÇÃO NOMINADA
function exemplo (num1, num2){
    return num1 + num2;
}

console.log(exemplo(10, 20));

//=========================================

//FUNÇÃO ANÔNIMA
const example = function (num1, num2){
    return num1 + num2;
};

console.log(example(2, 4));

//=========================================

//ARROW FUNCTION
const arrowFunction = (num1, num2) => num1 + num2;

console.log(arrowFunction(15, 30));

//=========================================

//HOFS - HIGHER ORDER FUNCTIONS
const array = ['GOKU', 'GOHAN', 'BULMA', 'MESTRE KAME'];

array.forEach((personagem) => console.log(`DBZ - ${personagem}`)); 

