import React from "react";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>AdmitKard 2023 Assignment</h1>
      <br />
      <div>
        <ul>
          <li>
            {/* Endpoint to route to About component */}
            <Link to="/UserForm">
              <h3>User Form To Submit Details</h3>
            </Link>
          </li>
          <li>
            {/* Endpoint to route to Contact Us component */}
            <Link to="/SearchUser">
              <h3>Search User</h3>
            </Link>
          </li>
        </ul>
      </div>
      <div class="card" style={{ width: "35rem", margin: "20px" }}>
        <div class="card-header" style={{ textAlign: "center" }}>
          Students Details
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            Name: <b>Sonu Kumar</b>{" "}
          </li>
          <li class="list-group-item">
            Email:{" "}
            <a href=" ">
              <b>sonukum870@gmail.com</b>
            </a>
          </li>
          <li class="list-group-item">
            Phone:<b>7667984847</b>
          </li>
          <li class="list-group-item">
            Linkedln:
            <a
              href="https://www.linkedin.com/in/sonu-kumar-614413192/"
              target="_blank"
            >
              https://www.linkedin.com/in/sonu-kumar-614413192/
            </a>
          </li>
          <li class="list-group-item">
            Linkedln:
            <a href="https://github.com/Sonukum226" target="_blank">
              https://github.com/Sonukum226
            </a>
          </li>
          <li class="list-group-item">
            College: <b>Lovely Professional University</b>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default HomePage;
