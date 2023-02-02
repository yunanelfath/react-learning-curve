import { Routes, Route } from "react-router-dom";
import Homepage from "../containers/Homepage";
import SignUp from "../containers/Signup";
import Profile from "../containers/Profile";
import { routerPath } from "./Routerlist";
import Aboutme from "../containers/Aboutme";
import Blog from "../containers/Blog";

export const RootRouter = () => {
  return (
    <Routes>
      <Route path={routerPath.homepage} element={<Homepage />} />
      <Route path={routerPath.signup} element={<SignUp />} />
      <Route path={routerPath.profile} element={<Profile />} />
      <Route path={routerPath.aboutme} element={<Aboutme />} />
      <Route path={routerPath.blog} element={<Blog />} />
    </Routes>
  );
};
