import React, { useState } from 'react';
import CartContext from '../context/CartContext';

export default function CartProvider({ defaultValue = [], children }) {
  const [cart, setCart] = useState(defaultValue);
  const [cartTotal, setCartTotal] = useState(0);
  const [cantItems, setCantItems] = useState(0);

  function getFromCart(id) {
    return cart.find(x => x.item.id === id);
  }

  function isInCart({ id }) {
    return id === undefined ? undefined : getFromCart(id) !== undefined;
  }

  function addToCart(obj) {
    if (isInCart(obj.item)) {
        console.log('El item ya esta en el carrito.');
        return;
    }
    setCart([...cart, obj]);
    console.log('Elemento agregado al carrito.');
    setCantItems(cantItems + 1);
  }

  function removeFromCart(id){
    const index = cart.indexOf(getFromCart(id));
    if (index > -1) {
    cart.splice(index, 1);
    }
    console.log('Un producto eliminado del carrito.')
    setCantItems(cantItems - 1);
  }

  function clear() {
    setCart([]);
    console.log('El carrito fue vaciado.');
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, clear, removeFromCart, getFromCart, cartTotal, setCartTotal, cantItems, isInCart }}>
      {children}
    </CartContext.Provider>
  );
}