import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import Select from "react-select";

const UserForm = () => {
  // const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    contact: "",
    course: "",
    country: "",
    dob: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const PostData = async (e) => {
    console.log("clickeds");
    e.preventDefault();

    const { name, email, contact, course, country, dob } = user;

    const res = await fetch("http://localhost:5000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, contact, course, country, dob }),
    });

    console.log("kaam yha tk kiya");

    const data = await res.json();

    if (data.status === 422 || !data) {
      window.alert("Error in submitting data");
      console.log("Error in submitting data");
    } else {
      window.alert("Data submitted successfully");
      console.log("Data submitted successfully");

      // history.push("/");
    }
  };

  const CourseOptions = [
    { value: "ug", label: "UG" },
    { value: "pg", label: "PG" },
  ];

  const CountryOptions = [
    { value: "india", label: "INDIA" },
    { value: "usa", label: "USA" },
    { value: "aus", label: "AUSTRALIA" },
    { value: "canada", label: "Canada" },
    { value: "new-zealand", label: "NEW-ZEALAND" },
    { value: "uk", label: "UK" },
  ];

  return (
    <div>
      <form method="POST">
        {/* User Name */}
        <div class="form-group">
          <label>Name</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Name"
            name="name"
            required
            autoComplete="off"
            value={user.name}
            onChange={handleChange}
          />
          {/* User Email */}
        </div>
        <div class="form-group">
          <label>Email address</label>
          <input
            type="email"
            name="email"
            class="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            required
            autoComplete="off"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        {/* User Contact */}
        <div class="form-group">
          <label>Contact Number</label>

          <input
            type="text"
            class="form-control"
            placeholder="Contact Number"
            name="contact"
            required
            autoComplete="off"
            value={user.contact}
            onChange={handleChange}
          />
        </div>
        {/* course Level */}

        <div class="form-group">
          <label> Select Course Level</label>
          <Select
            placeholder="Select Course Level"
            options={CourseOptions}
            value={user.CourseOptions}
            onChange={(e) => setUser({ ...user, course: e.value })}
          />
        </div>

        <div class="form-group">
          <label> Select Country</label>
          <Select
            placeholder="Select Country"
            options={CountryOptions}
            required
            value={user.CountryOptions}
            onChange={(e) => setUser({ ...user, country: e.value })}
          />
        </div>

        <div class="form-group">
          <label>Date of Birth</label>
          <input
            type="email"
            name="dob"
            class="form-control"
            placeholder="Date of Birth"
            value={user.dob}
            onChange={handleChange}
          />
          <small class="form-text text-muted" autoComplete="off">
            <b>Optional</b>{" "}
          </small>
        </div>

        <button
          type="submit"
          class="btn btn-primary"
          value="register"
          onClick={PostData}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserForm;
