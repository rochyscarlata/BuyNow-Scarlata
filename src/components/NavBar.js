import React, { useState, useEffect } from "react";
import Logo from "../assets/logoSecund.png";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";
import Dropdown from "react-bulma-dropdown";

function NavBar() {
  const [isActive, setisActive] = React.useState(false);
  const [categories, setCategories] = useState([]);

  const getCategories = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { id: "aa00", name: "categoria1" },
        { id: "aa01", name: "categoria2" },
      ]);
    }, 100);
  });

  useEffect(() => {
    getCategories.then((result) => {
      setCategories(result);
    });
  }, []);

  return (
    <nav
      className="navbar is-white "
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src={Logo} />
        </a>
        <a
          onClick={() => {
            setisActive(!isActive);
          }}
          role="button"
          className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div
        id="navbarBasicExample"
        className={`navbar-menu ${isActive ? "is-active" : ""}`}
      >
        <div className="navbar-start is-primary">
          <a className="navbar-item is-primary">
            <strong>Inicio</strong>
          </a>
          <a className="navbar-item">
            <strong>Productos</strong>
          </a>
          <div class="dropdown is-hoverable navbar-item">
            <div class="dropdown-trigger">
              <button
                class="button"
                aria-haspopup="true"
                aria-controls="dropdown-menu4"
              >
                <span>Categorias</span>
                <span class="icon is-small">
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </button>
            </div>
            <div class="dropdown-menu" id="dropdown-menu4" role="menu">
              <div class="dropdown-content">
                <div class="dropdown-item">
                {categories.map((category) => {
                                return (<li key={category.id}><NavLink to={`/category/${category.id}`}>{category.name}</NavLink></li>)
                            })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-danger">
                <strong>Login</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar-end">
        <div className="navbar-brand">
          <a class="navbar-item">
            <CartWidget />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
