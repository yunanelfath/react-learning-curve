import React from "react";
import { routerPath } from "../router/Routerlist";
import { Link } from "react-router-dom";

const Profile = () => {
    return <div>Profile<br />
    <Link to={routerPath.homepage}>back</Link> 
    </div>;
}

export default Profile;