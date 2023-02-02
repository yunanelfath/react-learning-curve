import React from "react";
import { routerPath } from "../router/Routerlist";
import { Link } from "react-router-dom";

const Blog = () => {
    return <div>this is blog <br/>
    <Link to={routerPath.homepage}>back</Link> </div>
}

export default Blog;