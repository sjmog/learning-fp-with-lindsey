const readline = require('readline');

class RPS {
  constructor(gameInterface) {
    this.gameInterface = gameInterface;

    if(this.gameInterface === undefined) {
      this.gameInterface = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      })
    }
  }

  WIN_CONDITIONS = {
    'rock': 'scissors',
    'scissors': 'paper',
    'paper': 'rock'
  }

  determineWinner(weapon1, weapon2) {
    if(weapon1 === weapon2) {
      console.log('Everyone\'s a loser!')
      return;
    }

    const winner = this.WIN_CONDITIONS[weapon1] === weapon2 ? `${weapon1} wins!` : `${weapon2} wins!`
  
    console.log(winner[0].toUpperCase() + winner.slice(1, -1) + "!")
  }

  selectRandomWeapon() {
    return ['rock', 'scissors', 'paper'][Math.floor(Math.random() * 3)]
  }

  run() {
    this.gameInterface.on('line', (line) => {
      this.determineWinner(line, this.selectRandomWeapon())
    })
  }

}

module.exports = RPS;