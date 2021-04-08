import React from 'react';
import styled from "styled-components";

const ModalHandler = styled.div`
  height: 90%;
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
  align-items: center;
  font-family: Quicksand;
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

const ModalContent = () => {
    return (
        <ModalHandler>
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
          <button>Add Game</button>
        </ModalHandler>
    )
}

export default ModalContent
