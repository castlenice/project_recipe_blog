import React from "react";
import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./App.css";
import { client } from "./client";
import Posts from "./components/Posts";
import BootstrapCarouselComponent from "./components/Home";
import sontine from "./pictures/sontine.png";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  state = {
    articles: [],
  };

  componentDidMount() {
    client
      .getEntries()
      .then((response) => {
        console.log(response);
        this.setState({
          articles: response.items,
        });
      })
      .catch(console.error);
  }

  render() {
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
                <Route path="sonja" element={<Posts posts={this.state.articles} />}/>
                <Route path="/" element={<BootstrapCarouselComponent />} />
              </Routes>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
