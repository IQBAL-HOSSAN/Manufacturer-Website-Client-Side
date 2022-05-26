import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";
const NotFound = () => {
  return (
    <div className="py-5 mx-auto lg:px-32 text-center not-found-page">
      <h1>404</h1>
      <h2>This Page Was Not Found.</h2>
      <p className="my-4">
        The page you are looking is not available or has been removed. Try going
        to Home Page by using the button below.
      </p>

      <button className="btn  bg-gradient-to-r from-primary to-secondary ">
        <Link className="text-decoration-none text-light fw-bold" to="/">
          Go To Home Page
        </Link>
      </button>
    </div>
  );
};

export default NotFound;
