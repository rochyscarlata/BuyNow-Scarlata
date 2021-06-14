import React, { useState, useEffect } from "react";
import productos from '../Produc'
import Item from './Item'
export const ItemList = () => {

    const [producto, setProducto] = useState([]);
  
    useEffect(()=>{
      const getDatos = new Promise(resolve=>{
        setTimeout(()=>{
          resolve(productos);
        },2000);
      });
      getDatos.then((data)=>{
        setProducto(data)
      })
    },[producto])
  
    // const listaItems = producto.length?producto.map((data) => {
    //   return(
    //     <Item data={data} key={data.id}/>
    //   )
    // }):<tr><td colSpan={5}>No hay producto</td></tr>;
  

    return (
        <div className="container is-max-desktop">
          <div class="columns is-multiline is-3">
      <div class="column is-one-quarter">
      <div className=" card card-equal-height">
            {
                productos.map(x => (
                    <Item 
                        key = { x.id }
                        title = { x.title }
                        description = { x.description }
                        price = { x.price }
                        pictureUrl = { x.pictureUrl }
                    />
                ))
            }
            </div>
      </div>
     
      </div>
        </div>
    )
}