import React from "react";
import "./App.css";
import HomePage from "./Home";
import UserForm from "./form";
import SearchUser from "./SearchUser";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <React.Fragment>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/UserForm" element={<UserForm />} />
            <Route path="/SearchUser" element={<SearchUser />} />
            {/* <Navigate to="/" /> */}
          </Routes>
        </React.Fragment>
      </Router>
    </div>
  );
}

export default App;
