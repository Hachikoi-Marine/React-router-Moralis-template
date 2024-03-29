import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/profile">
        <div>Profile</div>
      </Link>

      <Link to="/settings">
        <div>Settings</div>
      </Link>
      <h1>Profile page</h1>
    </>
  );
};

export default Profile;
