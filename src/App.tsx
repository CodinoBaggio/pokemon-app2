import React, { useEffect, useState } from 'react';

import './App.css';
import { getAllPokemon, getPokemon } from './utils/pokemon';
import { Card } from './Card';

function App() {
  const initialURL = 'https://pokeapi.co/api/v2/pokemon';
  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState<any[]>([]);

  useEffect(() => {
    const fetchPokemonData = async () => {
      // 全てのポケモンデータを取得
      let res: any = await getAllPokemon(initialURL);

      // console.log(res.results);

      // ポケモンの詳細データを取得
      loadPokemon(res.results);

      // console.log(res);
      setLoading(false);
    };

    fetchPokemonData();
  }, []);

  const loadPokemon = async (data: Array<{ name: string; url: string }>) => {
    let _pokemonData = await Promise.all<any[]>(
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
        // <h1>ポケモンデータを取得しました</h1>
        <div className="pokemonCardContainer">
          {pokemonData.map((data, i) => {
            return <Card key={i} pokemon={data} />;
          })}
        </div>
      )}
    </div>
  );
}

export default App;
