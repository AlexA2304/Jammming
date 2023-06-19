import React, { useCallback } from "react";
import "./SearchBar.css";
import SearchDrop from '../SearchDrop/SearchDrop';

const SearchBar = (props) => {

  const handleTermChange = useCallback((event) => {
    const newTerm = event.target.value;
    props.onTermChange(newTerm);
    props.onType(newTerm);
  }, [props.onTermChange, props.onType]);

  const search = useCallback(() => {
    props.onSearch(props.term);
  }, [props.onSearch, props.term]);

  return (
    <div className="SearchBar">
      <div className="SearchBar-input">
        <div className="SearchBar-input-field">
          <input placeholder="Enter A Song Title" onChange={handleTermChange} value={props.term} />
          <button className="SearchButton" onClick={search}>SEARCH</button>
        </div>
        {props.term && <SearchDrop searchResults={props.dropResults} onSelect={props.onSelect} />}
      </div>
    </div>
  );
};

export default SearchBar;