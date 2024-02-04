let p5ListItem = document.querySelector('#p5');
p5ListItem.style.fontSize = '30px';

let newThing = document.createElement('span');
newThing.innerHTML = ' I am going along for the ride';

// attach to DOM
p5ListItem.appendChild(newThing);
function handleMyButtonClick () {
    console.log('howdy');

}// with class selector
let buttonThing = document.querySelector('.myButton');
buttonThing.addEventListener('click', () => {
    console.log('The button has been clicked!');
})