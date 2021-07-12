import React, { useContext } from 'react';
import { Badge } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import CartContext from '../context/CartContext';
import './CartWidget.css'

function CartWidget() {
    const { cantItems } = useContext(CartContext);
    return (
        <NavLink to="/cart" className={`${cantItems === 0 ? 'nav-link cartWidget cartVacio' : 'nav-link cartWidget' }`}>
            <i className="fas fa-shopping-cart cart"></i>   
            <Badge variant="warning" style={{color: "white"}}>{cantItems}</Badge>
        </NavLink>
    );
}
  
export default CartWidget;
