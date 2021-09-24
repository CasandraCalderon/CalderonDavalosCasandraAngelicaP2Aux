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

const allPlayers = players1.concat(gk, players2);

const players1Final = [gk,...players1, 'Thiago', 'Coutinho', 'Perisic'];

const team1 = game.odds.team1;
const draw = game.odds.x;
const team2 = game.odds.team2;

const printGoals = (cadena) => {
  let jugadores = cadena.split(',');
  let respuesta = [];
  for(let i = 0; i < jugadores.length; i++){
    let cont = 0;
    for (let j = 0; j < game.scored.length; j++){
      if(jugadores[i] === game.scored[j]){
        cont ++;
      }
    }
    if (cont > 0){
      respuesta.push(`${jugadores[i]} : ${cont}`);
    };
  }
  respuesta = respuesta.toString();
  return respuesta.replace(/,/g, '\n');
};
//console.log(printGoals('Gnarby,Hummels,Lewandowski'));

switch (true) {
  case team1<team2 && team1<draw:
    console.log('El equipo 1 ganara');
    break;
  case team2<team1 && team2<draw:
    console.log('El equipo 2 ganara');
    break;
  default :
    console.log('Sera empate');
};

let promedio = 0;
let div = 0;
for (let clave in game.odds){
  promedio = promedio + game.odds[clave];
  div ++;
}
//console.log(promedio / div);

let array = game.scored;
let repetidos = {}

array.forEach(function(arrayContenido) {
      repetidos[arrayContenido] = (repetidos[arrayContenido] || 0) + 1;
});

//console.log(repetidos);

const gameEvents = new Map([
  [17, 'GOAL'],
  [36, 'Substitution'],
  [47, 'GOAL'],
  [61, 'Substitution'],
  [64, 'Yellow card'],
  [69, 'Red card'],
  [70, 'Substitution'],
  [72, 'Substitution'],
  [76, 'GOAL'],
  [80, 'GOAL'],
  [92, 'Yellow card'],
]);


function evalues (events){
  let tiempo = 0; 
  for (var [key, value] of events) {
    tiempo = key - tiempo;
    console.log(`Un evento ocurrio : ${value}, en promedio : ${key}, cada ${tiempo} minutos`)
  }
}
evalues(gameEvents);






