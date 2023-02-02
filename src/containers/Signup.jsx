import React from "react";
import { routerPath } from "../router/Routerlist";
import { Link } from "react-router-dom";

const SignUp = () => {
  return <div>this is signup page <br/>
    <Link to={routerPath.homepage}>Back</Link>
  </div>;
};

export default SignUp;
