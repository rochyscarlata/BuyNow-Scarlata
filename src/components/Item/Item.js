import React from "react";
import ItemCount from "../ItemCount/ItemCount"

 const Item = ({ id, name, description, price, pictureUrl }) => {
  return (
    <>
   
      
      <div class="card-content has-text-centered">
        <figure class="image is-128x128 is-square	is-inline-block">
          <img className="imagen" src={pictureUrl} />
        </figure>
      </div>
      <div class="card-content">
        <h4 className="title is-4 has-text-centered">{name}</h4>
        <p>{description}</p>
        <p>{price}</p>
      </div>
      <ItemCount initial={1} stock={10} />
    
    </>
  );
};

export default Item