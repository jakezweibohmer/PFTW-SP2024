// what is a function - keyword(function)+name(sayHello)+variable (parameter) specific to function inside parenthesis
/* function sayHelloPerson (name) {
  alert('Howdy ' + name);
}

// how do you use it?
sayHelloPerson('Sam');
sayHelloPerson('Alice'); */

/* const firstNumber = window.prompt('number');
const secondNumber = window.prompt('different number');
console.log(Number(firstNumber) + Number(secondNumber));
function calculator(numbrer1, number2) {
    let modifiedNumber1 = number1;
    let modifiedNumber2 = number2;
    if(typeof number1 === 'string') {
        modifiedNumber = Number(numberr1)
    }
    if(typeof number2 === 'string') {
        modifiedNumber = Number(numberr1)
    }
console.log(modifiedNumber1 + modifiedNumber2);
}
calculator(firstNumber, secondNumber); */

// a function always RETURNS something
/* function calculatorV2 (n1, n2, operation) {
    if(operation === 'add') {
        return n1 + n2;
    }
    if(operation === 'subtract') {
        return n1 - n2;
    }
}
const whatIsTheFunction = calculatorV2 (10, 7, 'subtract');
const anotherFunctionReturn = calculatorV2 (10, 7, 'add');
console.log('this is the variable what is the function', whatIsTheFunction)
console.log('another fn', anotherFunctionReturn)
if(whatIsTheFunction) {
    console.log("truthy");
} else {
    console.log('falsy');
} */

/* 
// functon declaration - (taken to top of the script)
function step (ingredient, action) {
// whatever code you want that makes sense
  console.log("I'm going to " + action + 'the ' + ingredient);
}
console.log(step('bread', 'get from the cupboard'));
console.log(step('peanut butter', 'get from the cupboard'));
console.log(step('jelly', 'get from the fridge'));
console.log(step('peanut butter', 'spread'));

// fat arrow functions - function expression (not taken higher in script like function declaratoin)
const myOtherFunction = (ingredient) => {
  console.log('I have the ' + ingredient);

}
myOtherFunction('peanut butter'); */
/* 
// looping
// for loop - the "++" incremented by 1
// looping with arrays - use a "for loop" with an array
let myArray = ['snoopy', 'clifford', 'tintin', 'odie']
for(let loopVariable = 0; loopVariable < myArray.length; loopVariable++) {
    console.log('I really like ' + myArray[loopVariable])
}
console.log(myArray) */
/* 
// while loop - less common than "for" loop
let myNumber = 0;
while(myNumber < 20) {
  console.log("I'm waving hello", myNumber);
  myNumber++;
} */

/* const myObject = {
    color: 'red',
    style: 'flashy',
    name: 'something'
};
for(let i = 0; i < keys.length; i++) {
    const currentKey = keys[i];
    console.log(`${currentKey}: ${myObject[currentKey]}`);
}
const keys = Object.keys(myObject);
console.log(keys) */

const rectCoordinates = [
    {x: 0, y: 15},
    {x: 15, y: 100},
    {x: 300, y: 250}
]
function setup () {
    createCanvas(600, 600);
    background(100);
    }
    function draw () {
        noLoop();
        for(let loopVar = 0; loopVar < rectCoordinates.length; loopVar++) {
            rect(rectCoordinates[loopVar].x, rectCoordinates[loopVar].y, 30, 30);
        }
    }