const gameArray = [
    {title: 'Monopoly, ', type: 'board ', numberOfPlayers: '2-8 ', rating: '8', description: 'Monopoly is a multiplayer economics-themed board game. In the game, players roll two dice to move around the game board, buying and trading properties and developing them with houses and hotels. ' },

    {title: 'Farkle, ', type: 'dice ', numberOfPlayers: '2 or more ', rating: '10', description: 'Farkle is played by two or more players, with each player in succession having a turn at throwing the dice. Each player turn results in a score and the scores for each player accumulate to some winning total (usually 10,000). ' },

    {title: 'Gin Rummy, ', type: 'card ', numberOfPlayers: '2 ', rating: '5', description: 'Gin Rummy is a two-player card game variant of rummy. The objective in gin rummy is to be the first to reach an agreed-upon score, usually 100 points. ' }
];

const promptResponse = window.prompt("Pick a number between 1 and 3 and I'll tell you about that game");
console.log('Great Choice! You picked ' + gameArray[promptResponse -1 ].title + "which is a " + gameArray[promptResponse - 1].type + "game needing " + gameArray[promptResponse -1].numberOfPlayers + "players. It has a rating of " + gameArray[promptResponse -1].rating + ". " + gameArray[promptResponse -1].description);

alert('Great choice! You picked ' + gameArray[promptResponse -1 ].title + "which is a " + gameArray[promptResponse - 1].type + "game needing " + gameArray[promptResponse -1].numberOfPlayers + "players. It has a rating of " + gameArray[promptResponse -1].rating + ". " + gameArray[promptResponse -1].description);