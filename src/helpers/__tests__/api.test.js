import * as API from '../api';

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve('Success response'),
}));

beforeEach(() => {
  fetch.mockClear();
});

describe('games', () => {
  it('Returns a promise', () => {
    expect(API.games() instanceof Promise).toBeTruthy();
  });
  it('performs a fetch call', () => {
    API.games();
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});

describe('gameInfo', () => {
  it('Returns a promise', () => {
    expect(API.gameInfo() instanceof Promise).toBeTruthy();
  });
  it('performs a fetch call', () => {
    API.gameInfo();
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});

describe('session', () => {
  it('Returns a promise', () => {
    expect(API.session() instanceof Promise).toBeTruthy();
  });
  it('performs a fetch call', () => {
    API.session();
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});

describe('user', () => {
  it('Returns a promise', () => {
    expect(API.user() instanceof Promise).toBeTruthy();
  });
  it('performs a fetch call', () => {
    API.user();
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});

describe('addToFavourites', () => {
  it('Returns a promise', () => {
    expect(API.addToFavourites() instanceof Promise).toBeTruthy();
  });
  it('performs a fetch call', () => {
    API.addToFavourites();
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});

describe('removeFromFavourites', () => {
  it('Returns a promise', () => {
    expect(API.removeFromFavourites() instanceof Promise).toBeTruthy();
  });
  it('performs a fetch call', () => {
    API.removeFromFavourites();
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});

//  games
//  gameInfo
//  session
//  user
//  addToFavourites
//  removeFromFavourites
