import React from "react";

// function SearchForm(props) {
//   return (
  
//       <div className="form-group">
//         <label htmlFor="search">Where would you like to go sight see?:</label>
//         {/*  input for place  */}
//         <div className= "PlaceInput">
//         <textarea
//           className="form-control"placeholder="Your place of Origin"/>
//           </div>
//         <button href="#searchResult"onClick={() => props.handlePageChange("searchResult")} className="btn btn-primary mt-3">
//          SEARCH  {props.children}
//         </button>
//       </div>

//   );
// }
//  export default SearchForm;


function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Where do you want to go?</label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="PLACES..."
          id="search"
        />
        <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;