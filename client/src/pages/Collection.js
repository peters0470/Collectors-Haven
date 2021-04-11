import React, { useState} from "react";
import styled from 'styled-components';

import Modal from "../components/Modal";
import ModalContent from '../components/ModalContent';
import ModalButton from "../components/ModalButton";

const GameHandler = styled.div`
  height: 90vh;
  padding: 25px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  background-color: #f1fffc;
`;

const Collection = () => {
  const videoGames = [
    {
      name: "Skate 3",
      category: "Chill Skateboarding sandbox",
      rating: 7.5,
      publisher: "EA",
      developer: "EA",
    },
    {
      name: "Dragon Age II",
      category: "Action RPG",
      rating: 9,
      publisher: "EA",
      developer: "BioWare",
    },
    {
      name: "Need for Speed: Most Wanted",
      category: "racing action adventure",
      rating: 8,
      publisher: "EA",
      developer: "Criterion Games",
    },
    {
      name: "Majin and the Forsaken Kingdom",
      category: "action adventure",
      rating: 7,
      publisher: "BanDai",
      developer: "BanDai Namco games",
    },
    {
      name: "Majin and the Forsaken Kingdom",
      category: "action adventure",
      rating: 7,
      publisher: "BanDai",
      developer: "BanDai Namco games",
    },
    {
      name: "Majin and the Forsaken Kingdom",
      category: "action adventure",
      rating: 7,
      publisher: "BanDai",
      developer: "BanDai Namco games",
    },
    {
      name: "Majin and the Forsaken Kingdom",
      category: "action adventure",
      rating: 7,
      publisher: "BanDai",
      developer: "BanDai Namco games",
    },
  ];

  const [isOpen, toggle] = useState(false);
  function handleOpenModal(open) {
    console.log("close modal");
    toggle(open);
  }

  return (
    <>
      <GameHandler>
        {videoGames.map((games) => {
          return (
            <div className="game-container">
              <h2>{games.name}</h2>
              <ul className="game-list">
                <li className='collection-item'>Category: {games.category}</li>
                <li className='collection-item'>Rating: {games.rating}</li>
                <li className='collection-item'>Publisher: {games.publisher}</li>
                <li className='collection-item'>Developer: {games.developer}</li>
              </ul>
            </div>
          );
        })}
      </GameHandler>
      <div className="add-games-handler">
        <ModalButton handleClick={() => handleOpenModal(true)}>
          Add Game
        </ModalButton>
      </div>
      <Modal isOpen={isOpen} handleClose={() => handleOpenModal(false)}>
        <ModalContent/>
      </Modal>
    </>
  );
};

export default Collection;
