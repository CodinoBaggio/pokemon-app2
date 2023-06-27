import React, { FC } from 'react';

export const Card = ({ pokemon }) => {
  return (
    <div>
      <div>
        <img alt={pokemon.name} src={pokemon.sprites.front_default}></img>
      </div>
    </div>
  );
};
