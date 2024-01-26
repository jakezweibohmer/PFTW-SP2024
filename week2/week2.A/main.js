const quizArray = [
  { question: 'In what country did the first Starbucks open outside of the United States? ', answer: 'Japan ' },

  { question: 'In a website browser address bar, what does “www” stand for? ', answer: 'World Wide Web ' },

  { question: 'Where were the Declaration of Independence, the Constitution, and the Bill of Rights stored during World War II? ', answer: 'Fort Knox ' },

  { question: 'Who was the firt televised President of the United States? ', answer: 'Franklin D. Roosevelt.' },

  { question: 'Originally, Amazon only sold what kind of product? ', answer: 'Books.' },

  { question: 'Who painted the Mona Lisa? ', answer: 'Leonardo da Vinci.' },

  { question: 'Who was the first woman to win a Nobel Prize? ', answer: 'Marie Curie.' },

  { question: 'Chrome, Safari, Firefox and Explorer are different types of what? ', answer: 'Web Browsers.' },

  { question: 'In what year was the internet opened to the public? ', answer: '1993.' },

  { question: 'What food manufacturing company headquartered in Battle Creek, Michigan, uses several animal mascots to sell its cereals, such as Newton the Owl, Tony the Tiger, and a rooster named Cornelius? ', answer: 'The Kellogg Company (Kelloggs).' }
];

console.log(quizArray);

const randomIdx = Math.round(Math.random() * quizArray.length - 1);

console.log(randomIdx);

const promptResponse = window.prompt(quizArray[randomIdx].question);

window.alert('You answered ' + promptResponse + '. The correct answer is ' + quizArray[randomIdx].answer);

console.log(randomIdx + promptResponse);
