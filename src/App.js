import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      let pokemonArray = [];
      for (let i = 1; i <= 50; i++) {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
        pokemonArray.push(response.data);
      }
      setPokemonList(pokemonArray);
    };

    fetchPokemons();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="text-center p-6 bg-blue-500 text-white">
        <h1 className="text-4xl font-bold">Pokémon Cards</h1>
      </header>
      <main className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {pokemonList.map(pokemon => (
            <div key={pokemon.id} className="pokemon-card bg-white p-4 rounded-lg shadow-lg text-center hover:scale-105 transition-transform">
              <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                className="mx-auto"
              />
              <h2 className="text-xl font-bold mt-2 capitalize">{pokemon.name}</h2>
              <p className="text-gray-500">Weight: {pokemon.weight}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
