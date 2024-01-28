// Parameter (greeting) and Argument ('Salutations')
// "declarative function"
function logOutGreeting (greeting) {
  console.log(greeting);
}
// Response
logOutGreeting('Salutations');

// function to get stuff
function getStuff (ingredient){
console.log('get ' + ingredient);
}
getStuff('bread');
getStuff('peanut butter');
getStuff('honey');

// anonymous function (=>)
// "function expression"
const makeSandwich = (ingredientArray) =>{
  for (let i= 0; i < ingredientArray.length; i++){
  console.log('get ' + ingredientArray[i]);
  }
}
makeSandwich(['bread', 'mayo', 'tunafish']);
makeSandwich(['this', 'that', 'thing']);

// "let" reasigns a function
// let makeSandwich = (ingredientArray) => {
//     for (let i= 0; i < ingredientArray.length; i++){
//         console.log('get ' + ingredientArray[i]);
//     }
// }

function makeRand (maxNumber) {
    const output = Math.ceil(Math.random() * maxNumber);
    return output;
}
const randomOutput = makeRand(100);
console.log(randomOutput);

function checkLegality (age) {
    return age >= 21;
}
console.log(checkLegality(18));

const JakesAge = 48;
if (checkLegality(JakesAge)) {
    console.log('he is legal');
}

const myObject = {
    x: 200,
    y: 400,
    getPosition: () => {
        this.x = 35;
        this.y = 45;
        console.log('We are', + this.x + ' from the left, and', + this.y + ' from the top.');
    }
}
myObject.getPosition();
