import React from "react";
import API from "../API/map";
import { GoogleApiWrapper } from "google-maps-react";

function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Where would you like to go?:</label>
        {/* first inout for point of origin */}
        <div className= "origInput">
        <input
          onChange={props.handleInputChange}
          value={props.search1}
          name="search"
          type="text"
          className="form-control"
          placeholder="Your place of Origin"
          id="search"/>
          </div>
        {/* second input for desination */}
        <div className= "destInput">
        <input
          onChange={props.handleInputChange}
          value={props.search2}
          name="search"
          type="text"
          className="form-control"
          placeholder="Your Destination"
          id="search"/>
          </div>
        <button href="#home"onClick={() => props.handlePageChange("searchResult")} className="btn btn-primary mt-3">
          Search
        </button>
        <GoogleApiWrapper/>
      </div>
    </form>
  );
}

export default SearchForm;
