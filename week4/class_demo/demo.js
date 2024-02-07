const targetDiv = document.getElementById("targetDiv");

/* targetDiv.classList.add("red");
 */ /* console.log("array of div", document.getElementByClassName("repeatedClass")); */

/* const repeatedClassDivs = document.getElementByClassName("repeatedClass"); */
const myColors = ["red", "blue", "green", "teal", "cyan", "yellow"];

/* for (let i = 0; i < repeatedClassDivs; i++) {
  repeatedClassDivs[i].style.background = myColors[i];
} */

let colorIndex = 0;
targetDiv.addEventListener("click", function (event) {
  console.log("you clicked on target div", event);
});
