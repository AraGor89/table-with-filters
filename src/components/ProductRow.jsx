import React from "react";
import style from "./common.module.scss";

const ProductRow = ({ product }) => {
  const name = product.stocked ? (
    product.name
  ) : (
    <span className={style.finishedInStock}>{product.name}</span>
  );
  return (
    <tr>
      <td>{name}</td>
      <td>$ {product.price}</td>
    </tr>
  );
};
export default ProductRow;
