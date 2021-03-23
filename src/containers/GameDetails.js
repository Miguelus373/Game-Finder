import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';

const GameDetails = () => {
  const { pathname } = useLocation();
  const id = parseInt(pathname.split('/')[2], 10);

  const game = useSelector(state => state.games.find(game => game.id === id));

  const {
    title, image, description, genre,
  } = game;

  return (
    <>
      <Navbar title={title} backArrow />
      <img src={image} alt={title} />
      <p>{description}</p>
      <p>{genre}</p>
    </>
  );
};

export default GameDetails;
