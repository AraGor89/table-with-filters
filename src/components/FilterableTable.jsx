import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";
import Table from "./Table";
import style from "./common.module.scss";
import FilterTypes from "./FilterTypes";
const FilterableTable = ({
  dispatch,
  products,
  filterName,
  filterPrice,
  filterCategory,
  inStockOnly,
}) => {
  const onNameFilter = (e) => {
    const name = e.target.value;
    dispatch({ type: "FILTER_BY_NAME", name });
  };
  const onPriceFilter = (e) => {
    const price = e.target.value;
    dispatch({ type: "FILTER_BY_PRICE", price });
  };
  const onCategoryFilter = (e) => {
    const category = e.target.value;
    dispatch({ type: "FILTER_BY_CATEGORY", category });
  };
  const onInStockOnly = (e) => {
    const inStockOnly = e.target.checked;
    dispatch({ type: "IN_STOCK_ONLY", inStockOnly });
  };
  const clearAllFilters = () => {
    dispatch({ type: "FILTER_BY_NAME", name: "" });
    dispatch({ type: "FILTER_BY_PRICE", price: 1000 });
    dispatch({ type: "FILTER_BY_CATEGORY", category: "" });
    dispatch({ type: "IN_STOCK_ONLY", inStockOnly: false });
  };
  const rows = [];
  let lastCategory = null;
  products.forEach((product) => {
    if (product.name.indexOf(filterName) === -1) {
      return;
    }
    if (product.category.indexOf(filterCategory) === -1) {
      return;
    }
    if (product.price > filterPrice) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });
  return (
    <div className={style.appContainer}>
      <Table rows={rows} />
      <FilterTypes
        onNameFilter={onNameFilter}
        filterName={filterName}
        onPriceFilter={onPriceFilter}
        filterPrice={filterPrice}
        onCategoryFilter={onCategoryFilter}
        filterCategory={filterCategory}
        onInStockOnly={onInStockOnly}
        inStockOnly={inStockOnly}
        clearAllFilters={clearAllFilters}
      />
    </div>
  );
};
export default FilterableTable;
