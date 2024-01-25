const myMovies = ['John Wick', ' Gaurdians of the Galaxy', ' Top Gun', ' The Shawshank Redemption', ' Inglourious Basterds'];

const name = window.prompt("What is your favorite movie?");
myMovies.push(' ' + name);
console.log("Our favorite movies are " + myMovies.toString() + '.');