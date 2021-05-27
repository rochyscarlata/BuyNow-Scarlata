import React, {useState, useEffect} from 'react'
import Logo from '../assets/logoSecund.png';

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
              Inicio
            </a >
            <a  className="navbar-item">
              Productos
            </a >
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
              <button class="button is-primary is-rounded"><i class="fas fa-shopping-cart"></i></button>
              
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
