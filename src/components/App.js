import React from "react";
import PokemonPage from "./PokemonPage";

// "Where to start" states: 
// "While you could solve this lab without creating new components,
// you are encouraged to do so if it makes sense to do that at any point."
// I would choose to remove PokemonPage and put content in App
// But that is a removal, not an addition, so will leave as is

// Also "Where to start" states:
// "We want our react app ... easy to ... add more features later."
// In PokemonPage I am doing a shallow copy for adding/filtering pokemon
// Database has a nested value for "sprites"
// If a new feature will be modifying "sprites", maybe use a deep copy


function App() {
  return (
    <div className="App">
      <PokemonPage />
    </div>
  );
}

export default App;

/*
import React from "react";
import PokemonPage from "./PokemonPage";

function App() {
  return (
    <div className="App">
      <PokemonPage />
    </div>
  );
}

export default App;
*/