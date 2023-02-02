import React from "react";
import { Link } from "react-router-dom";
import { routerPath } from "../router/Routerlist";

const Homepage = () => {
  return (
    <>
      <div>this is homepage</div>
      <Link to={routerPath.signup}>Click here to signup</Link>
    </>
  );
};

export default Homepage;
