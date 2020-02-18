// import React, { Component } from "react";
import React from "react";
// import Map from "./components/API/map"
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import home from "./components/Pages/home";
import searchResult from "./components/Form/resultContainer";



function App() {
  return (
    <div className="App">
      
      <div className="App-header">
        <h2>I can SHOW you the WORLD!...</h2>
      </div>
      <Router>
      <div>
        <Route exact path="/" component={home} />
        <Route exact path="/search" component={searchResult} />
      </div>
    </Router>
   
    </div>
  );
}


export default App;
