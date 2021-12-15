import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "./App.css";
import Posts from "./components/Posts";
import BootstrapCarouselComponent from "./components/Home";
import sontine from "./pictures/sontine.png";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [results, setResults] = useState();

  useEffect(() => {
    axios
      .get("https://sontinerezepteblog-api.herokuapp.com/recipes")
      .then((response) => setResults(response.data.recipes))
      .catch((error) => alert(error));
  }, []);

  console.log("results", results);
  return (
    <div className="App">
      <div id="container">
        <header>
          <div className="header-logo">
            <img
              className="logo"
              src={sontine}
              alt="sontine-logo"
              width="175"
              height="100"
            />
            <span className="header">Genussrezepte</span>
          </div>
          <nav className="navbar">
            <NavLink
              className="link"
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "white" : "#db81f7",
              })}
            >
              Home
            </NavLink>
            <NavLink
              className="link"
              to="/sonja"
              style={({ isActive }) => ({
                color: isActive ? "white" : "#db81f7",
              })}
            >
              Sonjas Rezepte
            </NavLink>
            <NavLink
              className="link"
              to="/tine"
              style={({ isActive }) => ({
                color: isActive ? "white" : "#db81f7",
              })}
            >
              Tines Rezepte
            </NavLink>
          </nav>
        </header>
        <main>
          <div className="wrapper">
            <Routes>
              <Route
                path="sonja"
                element={<Posts results={results} />}
              />
              <Route path="/" element={<BootstrapCarouselComponent />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
