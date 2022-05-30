import React from "react";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div>
      <h1>AdmitKard 2023 Assignment</h1>
      <br />
      <ul>
        <li>
          {/* Endpoint to route to About component */}
          <Link to="/UserForm">User Form</Link>
        </li>
        <li>
          {/* Endpoint to route to Contact Us component */}
          <Link to="/SearchUser">Search</Link>
        </li>
      </ul>
    </div>
  );
};
export default HomePage;
