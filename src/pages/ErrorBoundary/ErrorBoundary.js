import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorBoundary = () => {
  let error = useRouteError();
  console.error(error.status);
  return isRouteErrorResponse(error) ? (
    <h1>
      {error.status} {error.statusText}
    </h1>
  ) : (
    <h1>{error.message || error}</h1>
  );
};

export default ErrorBoundary;
