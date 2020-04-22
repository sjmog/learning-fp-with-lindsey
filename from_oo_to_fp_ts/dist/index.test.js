"use strict";
const index = require('./index');
describe('RPS', () => {
    describe('#winner', () => {
        it('Works with rock beating scissors', () => {
            expect(index.winner('rock', 'scissors')).toEqual('Rock wins!');
        });
        it('Works with scissors beating paper', () => {
            expect(index.winner('scissors', 'paper')).toEqual('Scissors wins!');
        });
        it('Works with paper beating rock', () => {
            expect(index.winner('paper', 'rock')).toEqual('Paper wins!');
        });
        it('Works with drawing', () => {
            expect(index.winner('rock', 'rock')).toEqual('Everyone\'s a loser!');
        });
    });
    describe('#computerWeapon', () => {
        it('Selects a weapon at random', () => {
            const randomisationFunction = () => 0;
            expect(index.computerWeapon(randomisationFunction)).toEqual('rock');
        });
    });
    // This test should keep working.
    it('the user can select a weapon', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        const mockRandomisationFunction = () => 0.4;
        const mockInterface = {
            on: (event, callback) => callback('rock')
        };
        index.run(mockInterface, console.log, mockRandomisationFunction);
        expect(consoleSpy).toHaveBeenCalledWith('Rock wins!');
    });
});
//# sourceMappingURL=index.test.js.map