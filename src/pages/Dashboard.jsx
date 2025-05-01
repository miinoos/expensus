import React from "react";

//helper functions
import { useLoaderData } from "react-router-dom";
import Intro from "../components/Intro";

//loader

const Dashboard = () => {
  const { userName } = useLoaderData();
  return <div>{userName ? <p>{userName}</p> : <Intro />}</div>;
};

export default Dashboard;
