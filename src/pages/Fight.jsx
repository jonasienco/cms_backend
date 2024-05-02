import React, { useState } from "react";

const Fight = () => {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [hoveredPokemon, setHoveredPokemon] = useState(null);

  const handleSelectPokemon = (pokemon) => {
    setSelectedPokemon(pokemon);
    setHoveredPokemon(null); // Clear hovered pokemon when one is selected
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl text-center mb-1">Welcome to PokeFight!</h1>
      <h2 className="mb-5">
        Embark on an exciting adventure where you can challenge wild Pokémon,
        catch them, and make them your friends. <br></br>Your next adventure
        awaits you in the world of PokeFight!
      </h2>

      <div className="flex justify-center items-center py-5">
        <div className="flex justify-around">
          <div
            className={`card w-72 bg-base-100 shadow-xl ${
              selectedPokemon === "Bulbasaur"
                ? "bg-green-200"
                : hoveredPokemon === "Bulbasaur"
                ? "bg-gray-200"
                : ""
            }`}
            onClick={() => handleSelectPokemon("Bulbasaur")}
            onMouseEnter={() => setHoveredPokemon("Bulbasaur")}
            onMouseLeave={() => setHoveredPokemon(null)}
          >
            <figure className="px-8 pt-8 transition-transform duration-300">
              <img
                src="./bulbasaur.png"
                alt="Bulbasaur"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Bulbasaur</h2>
              <p>The grass-type Pokémon!</p>
              <div className="card-actions"></div>
            </div>
          </div>
          <div
            className={`card w-72 bg-base-100 shadow-xl ${
              selectedPokemon === "Charmander"
                ? "bg-green-200"
                : hoveredPokemon === "Charmander"
                ? "bg-gray-200"
                : ""
            }`}
            onClick={() => handleSelectPokemon("Charmander")}
            onMouseEnter={() => setHoveredPokemon("Charmander")}
            onMouseLeave={() => setHoveredPokemon(null)}
          >
            <figure className="px-8 pt-8 transition-transform duration-300">
              <img
                src="./charmander.png"
                alt="Charmander"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Charmander</h2>
              <p>The fire-type Pokémon!</p>
              <div className="card-actions"></div>
            </div>
          </div>
          <div
            className={`card w-72 bg-base-100 shadow-xl ${
              selectedPokemon === "Squirtle"
                ? "bg-green-200"
                : hoveredPokemon === "Squirtle"
                ? "bg-gray-200"
                : ""
            }`}
            onClick={() => handleSelectPokemon("Squirtle")}
            onMouseEnter={() => setHoveredPokemon("Squirtle")}
            onMouseLeave={() => setHoveredPokemon(null)}
          >
            <figure className="px-8 pt-8 transition-transform duration-300">
              <img src="./squirtle.png" alt="Squirtle" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Squirtle</h2>
              <p>The water-type Pokémon!</p>
              <div className="card-actions"></div>
            </div>
          </div>
        </div>
      </div>

      <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-blue-300">
        Start Adventure
      </button>
    </div>
  );
};

export default Fight;
