import React from "react";
import { useRouteError } from "react-router-dom";

import "./styles/ErrorPage.scss";

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="error-container">
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
