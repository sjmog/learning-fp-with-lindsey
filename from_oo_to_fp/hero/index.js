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
      return 'Everyone\'s a loser!';
    }

    const winner = this.WIN_CONDITIONS[weapon1] === weapon2 ? `${weapon1} wins!` : `${weapon2} wins!`
  
    return winner[0].toUpperCase() + winner.slice(1, -1) + "!"
  }

  selectRandomWeapon(randomisationFunction) {
    return ['rock', 'scissors', 'paper'][randomisationFunction()]
  }

  run() {
    this.gameInterface.on('line', (line) => {
      console.log(this.determineWinner(line, this.selectRandomWeapon(() => Math.floor(Math.random() * 3))))
    })
  }

}

module.exports = RPS;