const URL = 'https://gamefinderapi.herokuapp.com/';

const games = async () => {
  try {
    const response = await fetch(`${URL}/games`);
    const games = await response.json();

    return games;
  } catch {
    return false;
  }
};

const gameInfo = async id => {
  try {
    const response = await fetch(`${URL}/games/${id}`);
    const game = await response.json();

    return game;
  } catch {
    return false;
  }
};

const session = async (username, path) => {
  try {
    const OPTIONS = {
      method: 'POST',
      mode: 'cors',
    };

    const response = await fetch(`${URL}${path}?username=${username}`, OPTIONS);

    return response;
  } catch {
    return false;
  }
};

const user = async (id, token) => {
  try {
    const OPTIONS = {
      method: 'GET',
      mode: 'cors',
      headers: {
        Authorization: `Basic ${token}`,
      },
    };

    const response = await fetch(`${URL}/users/${id}`, OPTIONS);
    const user = await response.json();

    return user;
  } catch {
    return false;
  }
};

const addToFavourites = async (userID, gameID, token) => {
  try {
    const OPTIONS = {
      method: 'POST',
      mode: 'cors',
      headers: {
        Authorization: `Basic ${token}`,
      },
    };

    fetch(`${URL}/favourites?user_id=${userID}&game_id=${gameID}`, OPTIONS);

    return true;
  } catch {
    return false;
  }
};

const removeFromFavourites = async (favID, token) => {
  try {
    const OPTIONS = {
      method: 'DELETE',
      mode: 'cors',
      headers: {
        Authorization: `Basic ${token}`,
      },
    };

    fetch(`${URL}/favourites/${favID}`, OPTIONS);
    return true;
  } catch {
    return false;
  }
};

export {
  games, gameInfo, session, user, addToFavourites, removeFromFavourites,
};
