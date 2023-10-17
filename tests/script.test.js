const { expect } = require('@jest/globals');
const { getTwoByConsole, getTwoByGenre, getGameByConsoleAndGenre, getGameByName } = require('../src/script');

describe('Script tests', () => {
  describe('getTwoByConsole', () => {
    it('Should return two games by PS2 console', () => {
      const games = getTwoByConsole('PS2');
      expect(games).toHaveLength(2);
      expect(games[0].video_console).toEqual('PS2');
      expect(games[1].video_console).toEqual('PS2');
    });

    it('Should throw and error when the console doesnt exists', () => {
      try {
        getTwoByConsole('CONSOLE');
        throw new Error('other-error');
      } catch (error) {
        expect(error.message).not.toEqual('other-error');
      }
    });
  });

  describe('getTwoByGenre', () => {
    it('Should return two games by Survival Horror genre', () => {
      const games = getTwoByGenre('Survival Horror');
      expect(games).toHaveLength(3);
      expect(games[0].genres).toContain('Survival Horror');
      expect(games[1].genres).toContain('Survival Horror');
      expect(games[2].genres).toContain('Survival Horror');
    });
    it('Should throw and error when the genre doesnt exists', () => {
      try {
        getTwoByConsole('GENRE');
        throw new Error('other-error');
      } catch (error) {
        expect(error.message).not.toEqual('other-error');
      }
    });
  });

  describe('getGameByConsoleAndGenre', () => {
    it('Should return a game for GBA and Sport genre', () => {
      const game = getGameByConsoleAndGenre('GBA','Sports');
      expect(game.genres).toContain('Sports');
      expect(game.video_console).toEqual('GBA');
    });

    it('Should throw and error when the console doesnt exists', () => {
      expect(0).toBeTruthy();
    });

    it('Should throw and error when the genre doesnt exists', () => {
      expect(0).toBeTruthy();
    });
  });

  describe('getGameByName', () => {
    it('Should return the Resident evil 2 game', () => {
      const game = getGameByName('Resident Evil 2');
      expect(game.name).toEqual('Resident Evil 2');
    });

    it('Should return undefined when not found', () => {
      expect(0).toBeTruthy();
    });
  });

  describe('getGamesByGenre', () => {
    it('Should return a list of games by Action genre', () => {
      expect(0).toBeTruthy();
    });
    it('Should return a empty list when the genre doesnt exists', () => {
      expect(0).toBeTruthy();
    });
  });
});
