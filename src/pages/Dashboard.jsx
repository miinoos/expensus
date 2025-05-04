import React, { StrictMode } from "react";

//helper functions
import { useLoaderData } from "react-router-dom";
import Intro from "../components/Intro";
import Budgets from "../components/Budgets";
import ExpenseForm from "../components/ExpenseForm";

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
            {budgets && budgets.length > 0 ? (
              <div className="grid-lg">
                <div className="flex-lg">
                  <Budgets />
                  <ExpenseForm budgets={budgets} />
                </div>
              </div>
            ) : (
              <div className="grid-sm">
                <p>Personal budgeting is the secret to financial freedom.</p>
                <p>Create a budget to get started!</p>
                <Budgets />
              </div>
            )}
          </div>
        </div>
      ) : (
        <Intro />
      )}
    </div>
  );
};

export default Dashboard;
