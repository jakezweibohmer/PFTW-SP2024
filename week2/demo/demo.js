const myArray = ["jake", "jaime", "gus", "meg"];
// const myOtherArray = new Array ();
// const yetAnotherArray = [myArray, "smith", 9];

console.log(myArray[1]);
myArray.push("phil");
myArray[1] = "bob"

console.log("my array is this long", myArray.length);
const philIndex = myArray.indexOf("phil");
console.log("you can find pnil at index", philIndex);
console.log(myArray);

// myArray.push("alice");
// console.log(myArray);
const whatWasPopped = myArray.pop();
console.log("array after pop", myArray);
console.log("this was popped", whatWasPopped);

myArray.splice(1, 0,"gary", "kevin"); // index to start, how many to remove
console.log("spliced array", myArray);

myArray.shift();
console.log("shifted array", myArray);
myArray.unshift("charlotte");
console.log("unshifted array", myArray);

const myEmails = "jake@2treesdesignco.com|2treesdesign@mchsi.com|zweibohmer@iowacentral.edu";
const myEmailArray = myEmails.split("|");
console.log("email array", myEmailArray);

const myCarArray = ["chevy", "subaru", "ford", "hyundai", "tesla"];
console.log(myCarArray.join("+"));

const myObject = {color: "red"};
console.log("What is the object color", myObject.color);

// using square brackets with the key in quotes is array notation
// using a dot with no quotes is dot notation.

const myCar = {
    color: "red",
    make: "honda",
    wheels: 4,
    model: "accord"
};
const yourCar = {
    color: "black",
    make: "tesla",
    wheels: 4,
    model: "who knows"
};
console.log("my car", myCar);
console.log("your car", yourCar);

const shipToAddress = {
    addressTypeCode: "ST",
    address1: "123 Right Here Blvd",
    city: "Humboldt",
    state: "Iowa",
    id: "aasdfeasef"
};

delete shipToAddress.id;
console.log("shipto address after id delete", shipToAddress);

const myStringA = "a";
const myStringB = myStringA;
const shipFrom = shipToAddress;
shipToAddress.address1 = "Anywhere but here";
console.log("ship from address", shipFrom);

const myCollectionOfCommanderDecks = [
    {
        commander: "Breya",
        colors: ["white", "black", "red", "blue"],
        winCon: "make lots of tokens and kill your opponents"
    },
    {
        commander: "Breya",
        colors: ["white", "black", "red", "blue"],
        winCon: "make lots of tokens and kill your opponents"
    },
    {
        commander: "Breya",
        colors: ["white", "black", "red", "blue"],
        winCon: "make lots of tokens and kill your opponents"
    },
    {
        commander: "Breya",
        colors: ["white", "black", "red", "blue"],
        winCon: "make lots of tokens and kill your opponents"
    }
];

const randomDeckIndex = Math.floor(Math.random() * myCollectionOfCommanderDecks.length);
console.log(myCollectionOfCommanderDecks [randomDeckIndex].commander);
const response = window.prompt("who is the commander" + myCollectionOfCommanderDecks [randomDeckIndex].winCon);
if(response === myCollectionOfCommanderDecks [randomDeckIndex].commander) {
    console.log("YOU WIN")
} else {
    console.log()
}
// console.log(Math.floor(3.7));