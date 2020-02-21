import React from "react";

export function SearchForm(props) {
  return (
  
      <div className="form-group">
        <label htmlFor="search">Where would you like to go sight see?:</label>
        {/*  input for place  */}
        <div className= "PlaceInput">
        <textarea
          className="form-control"placeholder="Your place of Origin"/>
          </div>
        <button href="#home"onClick={() => props.handlePageChange("searchResult")} className="btn btn-primary mt-3">
          {props.children}
        </button>
      </div>

  );
}