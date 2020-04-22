const { determineWinner, selectRandomWeapon, run } = require('./index.js')

describe('RPS', () => {

  let consoleSpy, game;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log')
  })

  describe('#determineWinner', () => {
    it('Works with rock beating scissors', () => {
      expect(determineWinner('rock', 'scissors')).toEqual('Rock wins!')
    })

    it('Works with scissors beating paper', () => {
      expect(determineWinner('scissors', 'paper')).toEqual('Scissors wins!')
    })

    it('Works with paper beating rock', () => {
      expect(determineWinner('paper', 'rock')).toEqual('Paper wins!')
    })

    it('Works with drawing', () => {
      expect(determineWinner('rock', 'rock')).toEqual('Everyone\'s a loser!')
    })
  })

  describe('#selectRandomWeapon', () => {
    it('Selects a weapon at random', () => {
      const randomisationFunction = () => 0

      expect(selectRandomWeapon(randomisationFunction)).toEqual('rock')
    })
  })

  // This test should keep working.
  it('the user can select a weapon', () => {
    jest.spyOn(Math, 'random').mockReturnValue(0.4) // scissors

    const mockInterface = {
      on: (event, callback) => callback('rock')
    }

    run(mockInterface)

    expect(consoleSpy).toHaveBeenCalledWith('Rock wins!')
  })

});