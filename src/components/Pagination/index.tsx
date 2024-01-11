import React from "react";

import classes from "./Pagination.module.scss";

type PaginationProps = {
  value: number;
  onChangePage: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({ value, onChangePage }) => {
  const pages: number[] = Array.from(Array(3), (_, i) => i + 1);

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
};

export default Pagination;
