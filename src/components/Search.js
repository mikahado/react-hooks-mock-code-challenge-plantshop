import React, {useState} from "react";

function Search({onSearch, searchTerm}) {
  

  const handleOnChange = (e) => 
    onSearch(e.target.value)
  


  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleOnChange}
        value={searchTerm}
      />
    </div>
  );
}

export default Search;
