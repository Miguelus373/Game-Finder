import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import GameCard from '../components/GameCard';
import * as API from '../requests/api';
import setGames from '../actions/index';

const GamesIndex = () => {
  const games = useSelector(state => state.games);
  const dispatch = useDispatch();

  useEffect(() => {
    API.games()
      .then(games => {
        dispatch(setGames(games));
      });
  }, []);

  if (games.length) {
    return (
      <>
        {games.map(game => (
          <Link to={`/games/${game.id}`} key={game.id}>
            <GameCard game={game} />
          </Link>
        ))}
      </>
    );
  }
  return (<h2>Loading</h2>);
};

export default GamesIndex;
