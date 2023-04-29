import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemons, setPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  
  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then((r) => r.json())
      .then((pokemons) => setPokemons(pokemons))
  }, []);

  console.log(pokemons);

  function addPokemon(newPokemon) {
    setPokemons([...pokemons, newPokemon]);
  }

  function onSearch(searchTerm) {
    setSearchTerm(searchTerm);
  }

  const pokemonsToDisplay = pokemons.filter((pokemon) => {
    if (searchTerm === "") return true;
    return (pokemon.name.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0);
  });


  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm
        addPokemon={addPokemon}
      />
      <br />
      <Search
        onSearch={onSearch}
        searchTerm={searchTerm}
      />
      <br />
      <PokemonCollection
        pokemons={pokemonsToDisplay}
      />
    </Container>
  );
}

export default PokemonPage;

/*
import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search />
      <br />
      <PokemonCollection />
    </Container>
  );
}

export default PokemonPage;
*/