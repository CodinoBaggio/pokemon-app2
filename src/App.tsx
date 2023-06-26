import React, { useEffect, useState } from 'react';

import './App.css';
import { getAllPokemon, getPokemon } from './utils/pokemon';

function App() {
  const initialURL = 'https://pokeapi.co/api/v2/pokemon';
  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchPokemonData = async () => {
      // 全てのポケモンデータを取得
      let res: any = await getAllPokemon(initialURL);

      console.log(res.results);

      // ポケモンの詳細データを取得
      loadPokemon(res.results);

      // console.log(res);
      setLoading(false);
    };

    fetchPokemonData();
  }, []);

  const loadPokemon = (data: Array<{ name: string; url: string }>) => {
    let _pokemonData = Promise.all<any[]>(
      data.map((pokemon: { name: string; url: string }) => {
        let pokemonRecord = getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData);
  };

  console.log(pokemonData);

  return (
    <div className="App">
      {loading ? (
        <h1>ロード中・・・</h1>
      ) : (
        <h1>ポケモンデータを取得しました</h1>
      )}
    </div>
  );
}

export default App;
