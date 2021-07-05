import React from 'react'
import { Link } from "react-router-dom";

function ItemDetail({ item }) {
    
    return (
        item.title ?
        
      <div className="container ">
          <div class="columns  is-multiline">
            <div class="column animate__animated animate__zoomInUp">
              <figure className="image ">
                <img src={item.pictureUrl}  alt={`${item.title} image`}/>
              </figure>
            </div>

            <div class="column animate__animated animate__zoomInUp">
              <div className="content">
                <h2 className="title is-2">{item.title}</h2>
                
               
               
                <p className="item-description">
                           Descripcion: {item.description}
                        </p>
              
               
               
                <h4 class="subtitle is-4">  {item.price && `$${item.price}`}</h4>
              
                 
               
              </div>
              <nav class="level is-mobile">
                <div class="level-left">
                  <Link to="/heroes" class="level-item" aria-label="undo" >
                    <span class="icon is-small">
                      <i class="fas fa-undo" aria-hidden="true"></i>
                    </span>
                    Back
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div> :
  
  <h2 className="loading">Cargando</h2> 
        
    )
}

export default ItemDetail
