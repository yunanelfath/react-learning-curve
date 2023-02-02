import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { routerPath } from "../router/Routerlist";

const Homepage = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("something triggered from state count: " + count);
  }, [count]);

  return (
    <>
      <div>this is homepage</div>
      <Link to={routerPath.signup}>Click here to signup</Link>
      <div style={{ marginTop: 30 }}>{count}</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Min
      </button>
    </>
  );
};

export default Homepage;
