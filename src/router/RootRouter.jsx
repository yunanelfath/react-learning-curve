import { Routes, Route } from "react-router-dom";
import Homepage from "../containers/Homepage";
import SignUp from "../containers/Signup";
import { routerPath } from "./Routerlist";

export const RootRouter = () => {
  return (
    <Routes>
      <Route path={routerPath.homepage} element={<Homepage />} />
      <Route path={routerPath.signup} element={<SignUp />} />
    </Routes>
  );
};
