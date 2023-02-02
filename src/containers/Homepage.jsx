import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { routerPath } from "../router/Routerlist";

const Homepage = () => {
  let [count, setCount] = useState(0);

  useEffect(() => {
    console.log("something triggered from state count: " + count);
  }, [count]);

  const onClickAdd = () => {
    setCount(count + 1);
  };

  const onClickMin = () => {
    setCount(count - 1);
  }

  const onClickFibo = () => {
    if(count === 0) {count = 1};
    setCount(count + count);
  }

  return (
    <>
      <div>this is homepage</div>
      <Link to={routerPath.signup}>Click here to signup</Link> |  
      <Link to={routerPath.profile}>Click here to profile</Link> | 
      <Link to={routerPath.blog}>Click here to blog</Link> | 
      <Link to={routerPath.aboutme}>Click here to about me</Link> | 
      <div style={{ marginTop: 30 }}>{count}</div>
      <button onClick={onClickAdd}>Add</button>
      <button onClick={onClickMin}>Min</button>
      <button onClick={onClickFibo}>Fibonaci</button>
    </>
  );
};

export default Homepage;
