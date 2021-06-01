import React, {useState, useEffect} from 'react'
import Logo from '../assets/logoSecund.png';
import CartWidget from "./CartWidget";

function NavBar() {
    const [isActive, setisActive] = React.useState(false);

   
    return (
        <nav className="navbar is-white " role="navigation" aria-label="main navigation">
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
            <a  className="navbar-item is-primary" >
              <strong>
              Inicio
              </strong>
              
            </a >
            <a  className="navbar-item">
              
              <strong>
              Productos
              </strong>
            </a >
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
              <CartWidget/>

                <a  className="button is-danger"  >
                  <strong>Login</strong>
                </a >
              </div>
            </div>
  
           
          </div>
        </div>
      </nav>
    )
}

export default NavBar
