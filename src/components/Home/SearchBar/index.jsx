import React from "react";
import "./styles.css";
import lupa from "../../../assets/lupa.png";
const SearchBar = ({ value, handleSearchKey, clearSearch, formSubmit }) => (
  <div className="searchBar-wrap">
    <form onSubmit={formSubmit}>
      {" "}
      <input
        type="text"
        onChange={handleSearchKey}
        placeholder="Search by category"
        s
        value={value}
      />
      {value && <span onClick={clearSearch}>X</span>}
      <button>
        <img className="search-logo" src={lupa} alt="search" />
      </button>
    </form>
  </div>
);

export default SearchBar;
