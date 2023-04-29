import React from "react";

function Search({ onSearch, searchTerm }) {

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input
          className="prompt"
          value={searchTerm}
          onChange={(e) => onSearch(e.target.value)}
        />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;


/*
import React from "react";

function Search() {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
*/
