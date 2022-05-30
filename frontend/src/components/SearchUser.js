import React, { useState } from "react";
import "./App.css";
import axios from "axios";

const SearchUser = () => {
  const [search, setSearch] = useState("");

  const [user, setUser] = useState({
    name: "",
    email: "",
    contact: "",
    course: "",
    country: "",
    dob: "",
  });

  const handleClick = (e) => {
    e.preventDefault();

    if (search === "") {
      alert("Please enter a Email");
    } else {
      axios.get(`http://localhost:5000/search/${search}`).then((res) => {
        // console.log(res.data.name);

        setUser({
          name: res.data.name,
          email: res.data.email,
          contact: res.data.contact,
          course: res.data.course,
          country: res.data.country,
          dob: res.data.dob,
        });
      });

      // console.log(user);

      setSearch("");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Search User</h1>

      <div>
        <form method="POST">
          <input
            type="search"
            class="form-control rounded size-lesser input-group"
            placeholder="Search"
            name="search"
            value={search}
            aria-label="Search"
            aria-describedby="search-addon"
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>
      <button
        type="button"
        style={{ marginTop: "10px" }}
        class="btn btn-outline-primary"
        onClick={handleClick}
      >
        Search user
      </button>

      <div class="card" style={{ width: "30rem", margin: "20px" }}>
        <div class="card-header" style={{ textAlign: "center" }}>
          User Details
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Name: {user.name}</li>
          <li class="list-group-item">Email: {user.email}</li>
          <li class="list-group-item">Contact: {user.contact}</li>
          <li class="list-group-item">Course: {user.course}</li>
          <li class="list-group-item">Country: {user.country}</li>
          <li class="list-group-item">DOB: {user.dob}</li>
        </ul>
      </div>
    </div>
  );
};

export default SearchUser;
