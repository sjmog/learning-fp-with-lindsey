const RPS = require('./index.js')

describe('RPS', () => {

  let consoleSpy, game;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log')
    game = new RPS()
  })

  it('Works with rock beating scissors', () => {
    game.determineWinner('rock', 'scissors')

    expect(consoleSpy).toHaveBeenCalledWith('Rock wins!')
  })

  it('Works with scissors beating paper', () => {
    game.determineWinner('scissors', 'paper')

    expect(consoleSpy).toHaveBeenCalledWith('Scissors wins!')
  })

  it('Works with paper beating rock', () => {
    game.determineWinner('paper', 'rock')

    expect(consoleSpy).toHaveBeenCalledWith('Paper wins!')
  })

  it('Works with drawing', () => {
    game.determineWinner('rock', 'rock')

    expect(consoleSpy).toHaveBeenCalledWith('Everyone\'s a loser!')
  })

  it('Selects a weapon at random', () => {
    jest.spyOn(Math, 'random').mockReturnValue(0.1)

    expect(game.selectRandomWeapon()).toEqual('rock')
  })

  // This test should keep working.
  it('the user can select a weapon', () => {
    jest.spyOn(Math, 'random').mockReturnValue(0.4) // scissors

    const mockInterface = {
      on: (event, callback) => callback('rock')
    }

    game = new RPS(mockInterface)
    game.run()

    expect(consoleSpy).toHaveBeenCalledWith('Rock wins!')
  })

});