import React, { useState, useEffect } from "react";
import Maceta from "../../assets/Productos/maceta2.jpg";
import "./ItemCount.css";
import Item from '../Item/ItemList'
function ItemCount({ initial, stock }) {
    const[items, setItems] = useState(initial);
    const[btnSuma, setBtnSuma] = useState(false);
    const [btnResta, setBtnResta] = useState(false);
    const [carrito, setCarrito]= useState(0);
//funciones para añadir productos
  const addItem = () => {
    
       setItems(items + 1)
  };
  const removeItem = () => {
     setItems(items - 1)
  };
//=========funcion agregar al carrito============
const onAdd = () =>{
  setCarrito(carrito+items)
  // if (carrito===stock){
  //   console.log('no hay mas stock')
  // }
} 

// funcion para cuando no haya stock desabilitar los btn

  useEffect(() => {
    if(items>initial || stock<items){
        setBtnSuma(false);
        setBtnResta(false);
    }else if(items<=initial){
      setBtnResta(true);
    }
    if (items>= stock){
      setBtnSuma(true);
    }
}, [items])
//======================

  return (
    <div className="row">
    <div className="colum is-mobile">
      <div className="has-text-centered ">
        <button
          class="button is-primary is-rounded is-small"
          onClick={removeItem}
          disabled={btnResta}
        >
          {" "}
          <i class="fas fa-minus"></i>
        </button>
        <span></span>
        <span className="cantidad">{items}</span>
        <button
          class="button is-primary is-rounded is-small"
          onClick={addItem}
          disabled={btnSuma}
        >
          {" "}
          <i class="fas fa-plus"></i>
        </button>
    
      </div>
      <p className='shoppingCart'>Carrito: {carrito}</p>
      <footer class="card-footer has-background-success-light">
          <a
            href="#"
            class="card-footer-item"
            onClick={carrito+items > stock ? null : ()=>onAdd()}>
            Añadir a carrito
          </a>
        </footer>
    
    </div>
    </div>
  );
}

export default ItemCount;












{/* <div className="container is-max-desktop">
<div class="columns is-multiline is-3">
  <div class="column is-one-quarter">
    <div className=" card card-equal-height">
      <div class="card equal-height has-text-centered">
        <div class="card-content has-text-centered">
          <figure class="image is-128x128 is-square	is-inline-block">
            <img className="imagen" src={Maceta} />
          </figure>
        </div>
        <div class="card-content">
          <h4 className="title is-4 has-text-centered">Maceta rustica</h4>
         
        </div>
        <footer class="card-footer has-background-success-light">
          <a
            href="#"
            class="card-footer-item"
            onClick={carrito+items > stock ? null : ()=>onAdd()}>
            Añadir a carrito
          </a>
        </footer>
      </div>
    </div>
  </div>
</div>
</div> */}