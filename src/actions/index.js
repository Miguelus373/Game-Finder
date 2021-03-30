const setGames = games => ({
  type: 'SET_GAMES',
  payload: games,
});

const setUser = user => ({
  type: 'SET_USER',
  payload: user,
});

export { setGames, setUser };
