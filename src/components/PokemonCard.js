import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard( {pokemon}) {
  const [front, setFront] = useState(true);

  return (
    <Card>
      <div onClick={() => setFront(!front)} >
        <div className="image">
          <img
            alt={pokemon.name}
            src={ front ? pokemon.sprites.front : pokemon.sprites.back }
          />
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;

/*
import React from "react";
import { Card } from "semantic-ui-react";

function PokemonCard() {
  return (
    <Card>
      <div>
        <div className="image">
          <img alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">POKEMON NAME HERE</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            POKEMON HP HERE hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
*/