import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GameCard from '../components/GameCard';
import * as API from '../requests/api';
import { setGames } from '../actions/index';
import Navbar from '../components/Navbar';

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
        <Navbar title="Games" />
        {games.map(game => (
          <GameCard game={game} key={game.id} />
        ))}
      </>
    );
  }
  return (<h2>Loading</h2>);
};

export default GamesIndex;
