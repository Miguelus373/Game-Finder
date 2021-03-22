const games = (state = { }, action) => {
  switch (action.type) {
    case 'GET_GAMES':
      return { ...action.payload };

    default:
      return state;
  }
};

export default games;
