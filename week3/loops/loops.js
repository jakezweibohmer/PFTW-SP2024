// for loop with number
// assign variable "i=0", break "i <10", increment "i++"
/* for (let i = 0; i < 10; i++) {
    console.log('this is i', i);
} */

// for loop with an array
const myMovies = ['Star Wars', 'Empire Strikes Back', 'Return of the Jedi', 'Raiders of the Lost Ark', 'Last Crusade'];
for (let j = 0; j < myMovies.length; j++) {
console.log(myMovies[j]);
}

// while loop -- a little scary but not bad (can lock up browser)
let myVar = false;
while (myVar === false) {
    console.log('this will happen once');
    myVar = true;
}

// while loop removing items in an array (quiz option for assignment)
const myNums = [1, 2, 3, 4, 5, 6];
while (myNums.length > 0) {
    console.log('removing ' + myNums[myNums.length -1]);
    myNums.pop();
}
console.log(myNums);
