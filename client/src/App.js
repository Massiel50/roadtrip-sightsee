// import React, { Component } from "react";
import React from "react";
import Map from "./components/API/map"
import "./App.css";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <div className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <div className="loadMap">
        <Map />
      </div>
    </div>
  );
}


export default App;
