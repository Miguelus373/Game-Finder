import * as actions from '../index';

describe('Action creators', () => {
  it('should create an action to set games', () => {
    const games = [{ game1: 'Mario' }, { game2: 'Luigi' }];

    const expectedAction = {
      type: 'SET_GAMES',
      payload: games,
    };

    expect(actions.setGames(games)).toEqual(expectedAction);
  });

  it('should create an action to set a user', () => {
    const user = { id: 1, username: 'Myself' };

    const expectedAction = {
      type: 'SET_USER',
      payload: user,
    };

    expect(actions.setUser(user)).toEqual(expectedAction);
  });
});
