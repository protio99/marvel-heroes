import React from "react";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src="/assets/icons/marvel-logo.png" className="navbar__logo"></img>
      <div className="navbar__search">
        <input
          type="text"
          name="character"
          placeholder="Search character..."
          className="navbar__search__input"
        ></input>
        <img
          className="navbar__search__img"
          src="/assets/icons/search.png"
        ></img>
      </div>
    </nav>
  );
}
