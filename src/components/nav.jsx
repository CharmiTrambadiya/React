import React, { Component } from "react";
import ReactDOM from "react-dom";

// Write code here:
const Nav = () => (
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link nav-color" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link nav-color" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle nav-color" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item nav-color" href="#">Action</a>
          <a class="dropdown-item nav-color" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item nav-color" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link nav-color" href="#">Disabled</a>
      </li>
    </ul>
  </div>
</nav>
);

export default Nav;
