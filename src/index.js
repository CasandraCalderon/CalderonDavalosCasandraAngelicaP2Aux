const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
  [
    'Neuer',
    'Pavard',
    'Martinez',
    'Alaba',
    'Davies',
    'Kimmich',
    'Goretzka',
    'Coman',
    'Muller',
    'Gnarby',
    'Lewandowski',
  ],
  [
    'Burki',
    'Schulz',
    'Hummels',
    'Akanji',
    'Hakimi',
    'Weigl',
    'Witsel',
    'Hazard',
    'Brandt',
    'Sancho',
    'Gotze',
  ],
],
score: '4:0',
scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
date: 'Nov 9th, 2037',
odds: {
  team1: 1.33,
  x: 3.25,
  team2: 6.5,
  },
};

const players1 = [];
const players2 = [];

for (let i = 0; i < game.players[0].length; i++) {
  players1.push(game.players[0][i]);
};
for (let j = 0; j < game.players[1].length; j++) {
  players2.push(game.players[1][j]);
};
const gk = players1.shift();

const fieldPlayers = players1;

const allPlayers = game.players;

const players1Final = [gk,...players1, 'Thiago', 'Coutinho', 'Perisic'];

const team1 = game.odds.team1;
const draw = game.odds.x;
const team2 = game.odds.team2;
console.log(team1);
console.log(draw);
console.log(team2);

