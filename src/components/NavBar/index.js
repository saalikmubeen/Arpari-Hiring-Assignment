import React from 'react'
import logo from "../../images/logo.png";
import "./styles.css";


const NavBar = () => {
  return (
      <nav className="nav">
          <img src={logo} className="logo" alt="logo" />

          <input type="checkbox" id="checkbox" />
          <div class="sidebar__btn">
              <span class=""></span>
              <span class=""></span>
              <span class=""></span>
          </div>

          <ul className="sidebar__nav">
              <li>Products</li>

              <li>Partnerships</li>

              <li>Company</li>

              <li>Blog</li>

              <li className="nav-line">
                  <span className="line"></span>
              </li>

              <li>Login</li>

              <li className="btn">Sign Up</li>
          </ul>
      </nav>
  );
}

export default NavBar