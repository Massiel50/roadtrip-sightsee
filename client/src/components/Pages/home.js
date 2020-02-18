import React from "react";

function Home(props) {
  return (
      <div>

      <div>
        <a href="#home" onClick={() => props.handlePageChange("Home")} className="nav-link">
          Home
        </a>
      </div>
      </div>
  );
}

export default Home;
