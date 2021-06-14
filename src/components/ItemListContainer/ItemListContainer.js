import React,{useState, useEffect} from "react";
import "./ItemListContainer.css";
import { ItemList } from '../Item/ItemList';


function ItemListContainer({ greetings }) {
  
//   const onAdd = (i) => {
//     alert(`Añadiste ${i} unidades del producto al carrito`);
// }
  return (
    <>
      <h3 className="item-list-title">{greetings}</h3>
      <ItemList/>,

            
            </>
  );
}

export default ItemListContainer;
