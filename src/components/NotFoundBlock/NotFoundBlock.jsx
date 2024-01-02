import React from "react";

import classes from "./NotFoundBlock.module.scss";

export default function NotFoundBlock() {
  return (
    <div className={classes.root}>
      <h1>Упс!</h1>
      <p>Ничего не найдено!</p>
      <span>Извините, но такой страницы не существует</span>
    </div>
  );
}
