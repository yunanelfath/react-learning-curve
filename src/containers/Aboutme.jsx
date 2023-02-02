import React from "react";
import { routerPath } from "../router/Routerlist";
import { Link } from "react-router-dom";

const Aboutme = () => {
    return <div>this is about me <br />
    <Link to={routerPath.homepage}>back</Link> 
    </div>
    
}

export default Aboutme;
