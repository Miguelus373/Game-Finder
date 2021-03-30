import games from '../games';

const action = {
  type: 'SET_GAMES',
  payload: [{ game1: 'Mario' }, { game2: 'Luigi' }],
};

describe('games reducer', () => {
  it('Should return initial state', () => {
    expect(games(undefined, {})).toEqual([]);
  });

  it('Should handle "SET_GAMES" action', () => {
    expect(games(undefined, action)).toEqual(action.payload);
  });

  it('Should update length of games array in the state', () => {
    expect(games(undefined, action).length).toEqual(2);
  });

  it('Should not update state if unknown action type is provided', () => {
    const action = {
      type: 'NON_EXISTENT_TYPE',
      payload: [{ unknown: 'battleground' }],
    };

    expect(games(undefined, action)).not.toEqual(action.payload);
  });
});
