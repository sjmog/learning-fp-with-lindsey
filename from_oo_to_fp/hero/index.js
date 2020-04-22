const readline = require('readline');

function determineWinner(weapon1, weapon2) {
  const WIN_CONDITIONS = {
    'rock': 'scissors',
    'scissors': 'paper',
    'paper': 'rock'
  }

  if(weapon1 === weapon2) {
    return 'Everyone\'s a loser!';
  }

  const winner = WIN_CONDITIONS[weapon1] === weapon2 ? `${weapon1} wins!` : `${weapon2} wins!`

  return winner[0].toUpperCase() + winner.slice(1, -1) + "!"
}

function selectRandomWeapon(randomisationFunction) {
  return ['rock', 'scissors', 'paper'][Math.floor(randomisationFunction() * 3)]
}

function run(gameInterface) {
  if(gameInterface === undefined) {
    gameInterface = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })
  }

  gameInterface.on('line', (line) => {
    console.log(determineWinner(line, selectRandomWeapon(() => Math.random())))
  })
}

module.exports = { determineWinner, selectRandomWeapon, run };