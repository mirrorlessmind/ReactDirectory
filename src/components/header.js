import React from "react";
import "../styles/header.css"

function Jumbotron() {
  return (
  <div>
    <header>
      <div className="container">
        <h1 className="display-4"><i className="fas fa-user-friends"></i> <b>Staff Directory</b></h1>
        <p className="lead">Search by first or last name or click the column heading to sort.</p>
      </div>
    </div>
  </div>
  );
}

export default header;