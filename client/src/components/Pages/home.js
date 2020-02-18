import React from "react";

function homePage(props) {
  return (
      <div>
        <a href="#home" onClick={() => props.handlePageChange("Home")} className="nav-link">
          Home
        </a>
      </div>

  );
}

export default NavTabs;
