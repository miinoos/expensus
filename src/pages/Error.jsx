import React from "react";
import { Link, useRouteError, useNavigate } from "react-router-dom";
import { ArrowUturnLeftIcon, HomeIcon } from "@heroicons/react/24/solid";

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <div className="error">
      <h1>Uh oh! We've got a problem</h1>
      <p>{error.message || error.status.Text}</p>
      <div className="flex-md">
        <button className="btn btn--dark" onClick={() => navigate(-1)}>
          <ArrowUturnLeftIcon width={20} />
          <span>Go Back</span>
        </button>
        <Link to="/" className="btn btn--dark">
          <span>Go Home!</span>
          <HomeIcon width={20} />
        </Link>
      </div>
    </div>
  );
};

export default Error;
