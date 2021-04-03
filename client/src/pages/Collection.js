import React, { useState } from "react";
import Modal from "../components/Modal";
import ModalButton from "../components/ModalButton";
import styled from "styled-components";

const ModalContent = styled.div`
  height: 90%;
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
  align-items: center;
  h1 {
    color: #5c3aff;
  }
`;
  // Form component, holds all labels & inputs 
const GameForm = styled.form`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
`;
  // handler around each label/input pair. Makes all inputs and lables even
const InputHandler = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
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
      <div className="game-handler">
        {videoGames.map((games) => {
          return (
            <div className="game-container">
              <h2>Name: {games.name}</h2>
              <ul className="game-list">
                <li>Category: {games.category}</li>
                <li>Rating: {games.rating}</li>
                <li>Publisher: {games.publisher}</li>
                <li>Developer: {games.developer}</li>
              </ul>
            </div>
          );
        })}
      </div>
      <div className="add-games-handler">
        <ModalButton handleClick={() => handleOpenModal(true)}>
          Add Game
        </ModalButton>
      </div>
      <Modal isOpen={isOpen} handleClose={() => handleOpenModal(false)}>
        <ModalContent>
          <h2>Create a new Game</h2>
          <GameForm>
            <InputHandler> 
              <label className="pm1" htmlFor="name">
                Name of Game:{" "}
              </label>
              <input
                placeholder="Game Name"
                name="name"
                type="text"
                id="name"
              ></input>
            </InputHandler>

            <InputHandler>
              <label className="pm1" htmlFor="description">
                Description:{" "}
              </label>
              <input
                placeholder="Description here"
                name="description"
                type="text"
                id="description"
              ></input>
            </InputHandler>

            <InputHandler>
              <label className="pm1" htmlFor="condition">Condition: </label>
              <input
                placeholder="Condition"
                name="condition"
                type="text"
                id="description"
              ></input>
            </InputHandler>

            <InputHandler>
              <label className="pm1" htmlFor="priceBought">Price Bought: </label>
              <input
                placeholder="Price Bought"
                name="price"
                type="text"
                id="price"
              ></input>
            </InputHandler>
          </GameForm>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Collection;
