import React from "react";
import style from "./common.module.scss";
const Table = ({ rows }) => {
  return (
    <div className={style.table}>
      <table>
        <thead>
          <tr>
            <th className={style.name}>Name</th>
            <th className={style.price}>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};
export default Table;
