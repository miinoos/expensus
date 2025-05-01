import React from "react";

//helper functions
import { useLoaderData } from "react-router-dom";
import Intro from "../components/Intro";
import Budgets from "../components/Budgets";

//loader

const Dashboard = () => {
  const { userName, budgets } = useLoaderData();
  return (
    <div>
      {userName ? (
        <div className="dashboard">
          <h1>
            Welcome Back, <span className="accent">{userName}</span>
          </h1>
          <div className="grid-sm">
            {/* {budgets? () : ()} */}
            <div className="grid-lg">
              <div className="flex-lg">
                <Budgets />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Intro />
      )}
    </div>
  );
};

export default Dashboard;
