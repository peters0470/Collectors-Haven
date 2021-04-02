import React from "react";
import { FaPlus } from "react-icons/fa";

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

  return (
    <>
      <div className="game-handler">
        {videoGames.map((games) => {
          return (
            <div className="game-container">
              <h2>Title: {games.name}</h2>
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
      <div className='add-games-handler'>
        <button>
              <FaPlus className='plus-icon'/>
        </button>
      </div>
    </>
  );
};

export default Collection;
