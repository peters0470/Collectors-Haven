import React, { useState} from "react";
import styled from 'styled-components';

import Modal from "../components/Modal";
import ModalContent from '../components/ModalContent';
import ModalButton from "../components/ModalButton";

const GameHandler = styled.div`
  height: 150%;
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
      image: "https://assets1.ignimgs.com/2020/05/05/skate-3-skate-4-1588675159693.jpg"
    },
    {
      name: "Dragon Age II",
      category: "Action RPG",
      rating: 9,
      publisher: "EA",
      developer: "BioWare",
      image: "https://fanatical.imgix.net/product/original/8c123e04-2244-4ab9-953f-c2d470e36f58.jpeg?auto=compress,format&w=400&fit=max"
    },
    {
      name: "Need for Speed: Most Wanted",
      category: "racing action adventure",
      rating: 8,
      publisher: "EA",
      developer: "Criterion Games",
      image: "https://images-na.ssl-images-amazon.com/images/I/91-U0YuPWAL.png"
    },
    {
      name: "Majin and the Forsaken Kingdom",
      category: "action adventure",
      rating: 7,
      publisher: "BanDai",
      developer: "BanDai Namco games",
      image: "https://images-na.ssl-images-amazon.com/images/I/81t9r3w3zWL._SL1280_.jpg"
    },
    {
      name: "World War Z",
      category: "action adventure",
      rating: 7,
      publisher: "Mad Dog Games",
      developer: "Saber Interactive",
      image: "https://kpbs.media.clients.ellingtoncms.com/img/photos/2013/06/19/Z_front_top_pic_t800.jpg?90232451fbcadccc64a17de7521d859a8f88077d"
    },
    {
      name: "Greed Fall",
      category: "action adventure",
      rating: 7,
      publisher: "Focus Home Interactive",
      developer: "Spiders",
      image: "https://www.obilisk.co/wp-content/uploads/2019/09/GreedFall-Launch-Trailer-_-PS4-1-28-screenshot.png",
    },
    {
      name: "Tomb Raider",
      category: "action adventure",
      rating: 7,
      publisher: "Square Enix",
      developer: "Eidos-Montreal",
      image: "https://pbs.twimg.com/media/EIn7DH3UEAUi9y9.jpg"
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
              <img src = {games.image} style = {{width:"100%"}} />
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
        <ModalButton className="add-game-button" handleClick={() => handleOpenModal(true)}>
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