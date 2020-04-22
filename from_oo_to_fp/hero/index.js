const readline = require('readline');

class RPS {
  constructor() {

  }

  WIN_CONDITIONS = {
    'rock': 'scissors',
    'scissors': 'paper',
    'paper': 'rock'
  }

  determineWinner(weapon1, weapon2) {
    if(weapon1 === weapon2) {
      return 'Everyone\'s a loser!';
    }

    const winner = this.WIN_CONDITIONS[weapon1] === weapon2 ? `${weapon1} wins!` : `${weapon2} wins!`
  
    return winner[0].toUpperCase() + winner.slice(1, -1) + "!"
  }

  selectRandomWeapon(randomisationFunction) {
    return ['rock', 'scissors', 'paper'][Math.floor(randomisationFunction() * 3)]
  }

  run(gameInterface) {
    if(gameInterface === undefined) {
      gameInterface = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      })
    }

    gameInterface.on('line', (line) => {
      console.log(this.determineWinner(line, this.selectRandomWeapon(() => Math.random())))
    })
  }

}

module.exports = RPS;