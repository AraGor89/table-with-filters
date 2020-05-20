import React from "react";
import { connect } from "react-redux";
import FilterableTable from "./FilterableTable";

const FilterableTableContainer = (props) => {
  return <FilterableTable {...props} />;
};
const mapStateToProps = (state) => ({
  products: state.tableReducer.products,
  filterName: state.tableReducer.filterName,
  filterPrice: state.tableReducer.filterPrice,
  filterCategory: state.tableReducer.filterCategory,
  inStockOnly: state.tableReducer.inStockOnly,
});
export default connect(mapStateToProps)(FilterableTableContainer);
