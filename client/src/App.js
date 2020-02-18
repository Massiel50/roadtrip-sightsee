// import React, { Component } from "react";
import React from "react";
import Map from "./components/API/map"
import "./App.css";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import home from "./components/Pages/home";
import search from "./components/Pages/search";


function App() {
  return (
    <div className="App">
      
      <div className="App-header">
        <h2>Welcome to React</h2>
      </div>
      <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={home} />
        <Route exact path="/search" component={search} />
      </div>
    </Router>

    </div>
  );
}


export default App;
