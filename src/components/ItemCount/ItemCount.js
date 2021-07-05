import React, { useState, useEffect } from "react";
import "./ItemCount.css";
import {InputGroup, Button} from 'react-bootstrap';

import Item from '../ItemList/ItemList'
function ItemCount({ initial, stock, onAdd }) {

  const [contador, setContador] = useState(initial);
  function restar(){
      if(contador > 1){
          setContador(contador - 1);
      }
      console.log('suma')
  };
  function sumar(){
      if(contador < stock){
          setContador(contador + 1);
      }            
  };


  return (

    <>
            <InputGroup className="mt-4 text-center">
                <InputGroup.Prepend>
                    <Button variant="outline-info" onClick={()=>restar()}>-</Button>
                </InputGroup.Prepend>
                <input className="form-control" value={contador} readOnly className="cantidad outline-info" />
                <InputGroup.Append>
                    <Button variant="outline-info" onClick={()=>sumar()}>+</Button>
                </InputGroup.Append>
            </InputGroup>  
            <Button variant="info" className="mt-2 btn-agregar" onClick={() => onAdd(contador)}>Agregar al carrito</Button>
        </>
  );
}

export default ItemCount;

