import React from "react";
import style from "./common.module.scss";
const Filter = ({ filter, handleFilterChange, searchType, placeholder }) => {
  return (
    <>
      <span>Search by {searchType}</span>
      <br />
      <input
        type="text"
        placeholder={placeholder}
        value={filter}
        onChange={handleFilterChange}
        className={style.filterInput}
      />
    </>
  );
};
export default Filter;
