import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import CartContext from '../context/CartContext';


function CartWidget() {
    const { cantItems } = useContext(CartContext);
    return (
        <NavLink to="/cart" className={`${cantItems === 0 ? 'nav-link cartWidget cartVacio' : 'nav-link cartWidget' }`}>
            <i class="fas fa-shopping-cart"></i>   
            <div className="cartCounter">{cantItems}</div>
        </NavLink>
    );
}
  
export default CartWidget;
