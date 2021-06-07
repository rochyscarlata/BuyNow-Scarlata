import React, { useState, useEffect } from "react";
import Maceta from "../../assets/Productos/maceta2.jpg";
import "./ItemCount.css";

function ItemCount({ initial, stock, onAdd }) {
    const[items, setItems] = useState(initial);

  const addItem = () => {
    items < stock
      ? setItems(items + 1)
      : alert("No hay mas stock");
  };
  const removeItem = () => {
    items > initial
      ? setItems(items - 1)
      : alert("La cantidad no puede ser menor a 1");
  };
  return (
    <div className="container ">
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
                <div className="row">
                  <div className="colum is-mobile">
                    <div className="has-text-centered ">
                      <button
                        class="button is-primary is-rounded is-small"
                        onClick={removeItem}
                      >
                        {" "}
                        <i class="fas fa-minus"></i>
                      </button>
                      <span></span>
                      <span className="cantidad">{items}</span>
                      <button
                        class="button is-primary is-rounded is-small"
                        onClick={addItem}
                      >
                        {" "}
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <footer class="card-footer has-background-success-light">
                <a
                  href="#"
                  class="card-footer-item"
                  onClick={() => onAdd(items)}>
                  Añadir a carrito
                </a>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCount;
