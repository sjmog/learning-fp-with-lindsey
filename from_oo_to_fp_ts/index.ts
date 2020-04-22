

function winner(weapon1: string, weapon2: string): string {
  const WIN_CONDITIONS: {[weapon:string]:string}  = {
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

function computerWeapon(randomisationFunction: () => number) {
  return ['rock', 'scissors', 'paper'][Math.floor(randomisationFunction() * 3)]
}

function run(a:any,b:any,c:any) {

}
module.exports = { winner:winner, computerWeapon:computerWeapon, run:run };
