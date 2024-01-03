import React from "react";

import classes from "./Pagination.module.scss";

export default function Pagination({ value, onChangePage, pageList }) {
  const pages = Array.from(Array(pageList), (_, i) => i + 1);

  return (
    <>
      <div className={classes.pagination}>
        <a>{"<"}</a>
        {pages.map((page) => {
          return (
            <a
              className={value === page ? `${classes.active}` : ""}
              key={page}
              onClick={() => onChangePage(page)}
            >
              {page}
            </a>
          );
        })}
        <a>{">"}</a>
      </div>
    </>
  );
}
