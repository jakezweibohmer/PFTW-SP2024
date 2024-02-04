// slect empty div and assign it to a variable
const myEmptyDiv = document.querySelector('#myEmptyDiv');

// put an h1 inside of it
// create a new element
const heading = document.createElement('h1');
heading.innerHTML = 'Why do rappers refer to guns as llamas?';

// created another element
const subHead = document.createElement('h3');
subHead.innerHTML = 'Llama is currently used as a synonym for ANY weapon, but especially guns. reason is simple - A llama is an animal famous for spitting at people who get in their face (Like a gun "spitting" bullets when it fires).';

// changes for heading (h1)
// add a cursor change
heading.style.cursor = 'pointer';

// event on click
heading.addEventListener('click', handleHeadingClick);
myEmptyDiv.appendChild(heading);
function handleHeadingClick () {
  // console.log('Heading has been clicked!');
  // changes background color on click
  document.body.style.backgroundColor = 'turquoise';
}

// changes for subHead (h3)
// add a cursor change
subHead.style.cursor = 'pointer';

// event on click subHead
subHead.addEventListener('click', handleSubHeadClick);
myEmptyDiv.appendChild(subHead);

function handleSubHeadClick () {
  document.body.style.color = 'lightyellow';
}