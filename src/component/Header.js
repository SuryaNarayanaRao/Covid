import React from "react";

export default function Header() {
  return (
      
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-success">
        <a className="navbar-brand " href="#" bg-primary>
    Covid Tracker 
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/chart">
                Chart
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/search">
                Search
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/global">
                Global
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Graph">
                Graph
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
   
  );
}



