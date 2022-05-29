import React, { useState } from "react";
import "./App.css";
import axios from "axios";

const SearchUser = () => {
  const [search, setSearch] = useState("");

  const handleClick = (e) => {
    e.preventDefault();

    if (search === "") {
      alert("Please enter a Email");
    } else {
      axios
        .get("http://localhost:5000/search", { params: { email: search } })
        .then((res) => {
          console.log(res.data);
        });

      setSearch("");
    }
  };

  return (
    <div>
      <h1>Search User</h1>

      <div class="input-group">
        <form method="POST">
          <input
            type="search"
            class="form-control rounded size-lesser"
            placeholder="Search"
            name="search"
            value={search}
            aria-label="Search"
            aria-describedby="search-addon"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            type="button"
            class="btn btn-outline-primary"
            onClick={handleClick}
          >
            search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchUser;
