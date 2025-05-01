import React from "react";

//helper functions
import { Outlet, useLoaderData } from "react-router-dom";

import wave from "../assets/wave.svg";
import Nav from "../components/Nav";

//loader

const Main = () => {
  const { userName } = useLoaderData();
  return (
    <div className="layout">
      <Nav userName={userName} />
      <main>
        <Outlet />
      </main>
      <img src={wave} alt="" />
    </div>
  );
};

export default Main;
