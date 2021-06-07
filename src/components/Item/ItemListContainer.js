import React,{useState, useEffect} from "react";
import "./ItemListContainer.css";
import ItemCount from "./ItemCount"
function ItemListContainer({ alert }) {
  
  const onAdd = (i) => {
    alert(`Añadiste ${i} unidades del producto al carrito`);
}
  return (
    <div className="container ">
      <h3 className="item-list-title">{alert}</h3>
            <ItemCount initial={1} stock={10} onAdd={onAdd}/>
    </div>
  );
}

export default ItemListContainer;
