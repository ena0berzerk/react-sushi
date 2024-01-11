import React from "react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

import "./styles/ErrorPage.scss";

const ErrorPage: React.FC = () => {
  const error = useRouteError() as Error;

  if (!isRouteErrorResponse(error)) {
    return null;
  }

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
};

export default ErrorPage;
