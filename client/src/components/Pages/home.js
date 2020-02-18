import React from "react";
import SearchForm from "./searchForm";

function Home(props) {
  return (
      <div>
          <div>
              <SearchForm/>
          </div>

      <div>
        <a href="#home" onClick={() => props.handlePageChange("Home")} className="nav-link">
          Home
        </a>
      </div>
      </div>
  );
}

export default Home;
