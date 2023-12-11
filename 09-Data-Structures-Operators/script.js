'use strict';

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

//Challenge 1: Football game
const [players1, players2] = game.players;

const [gk, ...fieldPlayers] = players1;
const allPlayers = [...players1, ...players2];
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
const { team1, draw, team2 } = game.odds;

function printGoals(...players) {
  for (let i = 0; i < players.length; i++) {
    console.log(players[i]);
  }
  console.log(`${players.length} goals were scored!`);
}
printGoals(...game.scored);

team1 < team2 && console.log(game.team1);
team2 < team1 && console.log(game.team2);

//Challenge 2: Football game
console.log(game.scored);

for (const [i, scored] of game.scored.entries()) {
  console.log(`Goal ${i}: scored by ${scored}`);
}
let avg = 0;

const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) {
  average += odd;
}
console.log((average /= odds.length));

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory for ${game[team]}`;

  console.log(`Odds for ${teamStr}: ${odd}`);
}

let scorers = {};

for (const player of game.scored) {
  scorers[player] ? (scorers[player] += 1) : (scorers[player] = 1);
}

console.log(scorers);

//Challenge 3: Football game
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);

const events = [...new Set([...gameEvents.values()])];
console.log(events);

gameEvents.delete(64);
console.log(gameEvents);

console.log(
  `An event happened, on avaerage every ${90 / gameEvents.size} minutes.`
);

for (const [time, event] of gameEvents) {
  const timeStr = time <= 45 ? `[First half]` : `[Second half]`;
  console.log(`${timeStr} ${time}: ${event}`);
}
