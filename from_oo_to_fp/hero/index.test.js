const RPS = require('./index.js')

describe('RPS', () => {

  let consoleSpy, game;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log')
    game = new RPS()
  })

  describe('#determineWinner', () => {
    it('Works with rock beating scissors', () => {
      expect(game.determineWinner('rock', 'scissors')).toEqual('Rock wins!')
    })

    it('Works with scissors beating paper', () => {
      expect(game.determineWinner('scissors', 'paper')).toEqual('Scissors wins!')
    })

    it('Works with paper beating rock', () => {
      expect(game.determineWinner('paper', 'rock')).toEqual('Paper wins!')
    })

    it('Works with drawing', () => {
      expect(game.determineWinner('rock', 'rock')).toEqual('Everyone\'s a loser!')
    })
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