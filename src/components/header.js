import React from 'react';
import "../styles/Header.css";

function Header () {
    return (
      <div className="header">
        <h1 className="display-4"><i className="fas fa-user-friends"></i> Staff Directory</h1>
        <p>Click to filter or use the search box to refine your results.</p>
      </div>
    )
  }

export default Header;