let submitAnswerButton;
let resetButton;
let questionInput;
let currentQuestion;
let response;
let responseColor = 'green';
let heading;
let incorrectResponse = 'Incorrect: 0';
let incorrectCount = 0;
let correctResponse = 'Correct: 0';
let correctCount = 0;
let resetMessage = 'Answer questions capitalizing the first letter of each word.\n'+ '(Click the RESET button anytime. 5 incorrect answers result in a loss.)';
let statements = [
  { question: 'Where was the first Starbucks opened outside of the United States? ', answer: 'Japan' },

  { question: 'In a website browser address bar, what does “www” stand for? ', answer: 'World Wide Web' },

  { question: 'Where were the Declaration of Independence, the Constitution,\n' + 'and the Bill of Rights stored during World War II? ', answer: 'Fort Knox' },

  { question: 'Who was the firt televised President of the United States? ', answer: 'Franklin D. Roosevelt' },

  { question: 'Originally, Amazon only sold what kind of product? ', answer: 'Books' },

  { question: 'Who painted the Mona Lisa? ', answer: 'Leonardo da Vinci' },

  { question: 'Who was the first woman to win a Nobel Prize? ', answer: 'Marie Curie' },

  { question: 'Chrome, Safari, Firefox and Explorer are different types of what? ', answer: 'Web Browsers' },

  { question: 'In what year was the internet opened to the public? ', answer: '1993' },

  { question: 'What food company uses several animal mascots to sell its cereals?', answer: "Kellogg's" }
];

// alert function
function next () {
  if(statements.length < 1) {
    alert('You won!');
    return;
  }
  const randomIndex = Math.ceil(Math.random() * statements.length - 1);
  return statements[randomIndex];
}
// question function
function checkQuestion () {
  if (currentQuestion.answer === questionInput.value()) {
    // remove correct answer from array
    statements = statements.filter(statementObj => {
      return currentQuestion.answer !== statementObj.answer;
});
    // this is the correct condition
    response = 'Correct! Next question';
    responseColor = 'green';
  } else{

// incorrect answer counter
    incorrectCount += 1;
    incorrectResponse = `Incorrect: ${incorrectCount}`

    if (incorrectCount > 4) {
      response = 'You Lost!';
      responseColor = 'red';
/*     } else{

 // correct answer counter
      correctCount += 1;
      correctResponse = `Correct: ${correctCount}`
    }
    if (correctCount > 4) {
      response = 'You Won!';
      responseColor = 'Green'; */

    }else{
      // this is the wrong answer condition
      response = 'Oops, that wasn\'t quite right! Try another.';
      responseColor = 'red';
    }
  }
  currentQuestion = next();
  questionInput.value('');
  if(currentQuestion) {
    message = currentQuestion.question;
  }
}
currentQuestion = next();
let message = currentQuestion.question;

// reset button function
function resetQuiz () {
  incorrectCount = 0;
  incorrectResponse = 'Incorrect: 0';
  response = '';
  currentQuestion = next ();
  message = currentQuestion.question;
  questionInput.value ('');
}

function setup () {
  createCanvas(1000, 600);
  heading = createElement('h1', ['Trivia Quiz']);
  heading.position(100, 80);
  questionInput = createInput('');
  questionInput.size(360, 35);
  questionInput.position(100, 250);
  submitAnswerButton = createButton('submit answer');
  submitAnswerButton.size(200, 30);
  submitAnswerButton.mousePressed(checkQuestion);
  submitAnswerButton.position(100, 300);
  resetButton = createButton('reset');
  resetButton.size(90, 30);
  resetButton.mousePressed(resetQuiz);
  resetButton.position(310, 300);
 }
function draw () {
  background('orange');
  fill('black');
  textSize(20);
  text(message, 100, 200);
  fill(responseColor);
  text(response, 100, 350);
  textSize(25);
  fill('red');
  text(incorrectResponse, 100, 400);
/*   textSize(25);
  fill('green');
  text(correctResponse, 300, 400); */
  textSize(16);
  fill('white');
  text(resetMessage, 100, 430);
}