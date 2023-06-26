import React, { useEffect } from 'react';

import './App.css';
import { getAllPokemon } from './utils/pokemon';

function App() {
  const initialURL = 'https://pokeapi.co/api/v2/pokemon';

  const fetchPokemonData = async () => {
    // 全てのポケモンデータを取得
    let res = await getAllPokemon(initialURL);
    console.log(res);
  };

  useEffect(() => {
    fetchPokemonData();
  }, []);

  return <div className="App"></div>;
}

export default App;
