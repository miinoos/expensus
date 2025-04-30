import React from "react";

//helper functions
import { fetchData } from "../helpers";
import { useLoaderData } from "react-router-dom";

//loader
export function dashboardLoader() {
  const userName = fetchData("userName");
  return { userName };
}

const Dashboard = () => {
  const { userName } = useLoaderData();
  return (
    <div>
      <h1>{userName || "Guest"}</h1>
    </div>
  );
};

export default Dashboard;
