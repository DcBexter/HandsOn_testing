import React from "react";
import {
  Link
} from "react-router-dom";
import "./nav.css";

const Navigation = () => (
    <ul>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/hello">Hello</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
);

export default Navigation;
