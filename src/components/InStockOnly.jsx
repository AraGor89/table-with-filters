import React from "react";
import style from "./common.module.scss";
const InStockOnly = ({ inStockOnly, handleInStockChange }) => {
  return (
    <p>
      <input
        type="checkbox"
        checked={inStockOnly}
        onChange={handleInStockChange}
        className={style.checkbox}
      />
      Show only available products
    </p>
  );
};
export default InStockOnly;
