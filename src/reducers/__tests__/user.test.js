import user from '../user';

const action = {
  type: 'SET_USER',
  payload: { info: { id: 37 }, favs: ['I like this one'] },
};

describe('user reducer', () => {
  it('Should return initial state', () => {
    expect(user(undefined, {})).toEqual({});
  });

  it('Should handle "SET_USER" action', () => {
    expect(user(undefined, action)).toEqual(action.payload);
  });

  it('Should update user id in the state', () => {
    expect(user(undefined, action).info.id).toEqual(37);
  });

  it('Should update user favs in the state', () => {
    expect(user(undefined, action).favs).toEqual(['I like this one']);
  });

  it('Should not update state if unknown action type is provided', () => {
    const action = {
      type: 'NON_EXISTENT_TYPE',
      payload: { user: 'unknown' },
    };

    expect(user(undefined, action)).not.toEqual(action.payload);
  });
});
