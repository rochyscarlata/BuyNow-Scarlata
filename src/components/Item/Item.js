import React from "react";
import ItemCount from "../ItemCount/ItemCount"
import { Link } from 'react-router-dom';


 const Item = ({ id, title, description, price, pictureUrl }) => {
  return (
    
      <div class="column ">
      <div className="card-equal-height">
      <div class="card-content has-text-centered">
        <figure class="image is-128x128 is-square	is-inline-block">
          <img className="imagen" src={pictureUrl} />
        </figure>
      </div>
      <div class="card-content">
        <h4 className="title is-4 has-text-centered">{title}</h4>
        <p>{description}</p>
        <p>${price}</p>
      </div>
      <ItemCount initial={1} stock={10} />
      </div>
      </div>
     
    
  );
};

export default Item