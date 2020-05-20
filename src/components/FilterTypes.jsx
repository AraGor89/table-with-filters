import React from "react";
import Filter from "./Filter";
import InStockOnly from "./InStockOnly";
import style from "./common.module.scss";

const FilterTypes = ({
  filterName,
  filterPrice,
  filterCategory,
  inStockOnly,
  onNameFilter,
  onPriceFilter,
  onCategoryFilter,
  onInStockOnly,
  clearAllFilters,
}) => {
  return (
    <div className={style.filterTypesContainer}>
      <Filter
        placeholder="Search"
        searchType="name"
        filter={filterName}
        handleFilterChange={(e) => onNameFilter(e)}
      />
      <br />
      <Filter
        placeholder="Less or equal to"
        searchType="price"
        filter={filterPrice}
        handleFilterChange={(e) => onPriceFilter(e)}
      />
      <br />
      <Filter
        placeholder="Search"
        searchType="category"
        filter={filterCategory}
        handleFilterChange={(e) => onCategoryFilter(e)}
      />
      <br />
      <InStockOnly
        inStockOnly={inStockOnly}
        handleInStockChange={(e) => onInStockOnly(e)}
      />
      <br />
      <button onClick={clearAllFilters}> Clear all filters</button>
    </div>
  );
};
export default FilterTypes;
