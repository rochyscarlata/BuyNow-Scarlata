import React from "react";
import Item from '../Item/Item';
import { Col } from "react-bootstrap";
function ItemList ( { items } ) {
    return (
        <div className="itemList">
          <Col>
          {items.map(producto => {
                return <Item key={producto.id} id={producto.id} title={producto.title} description={producto.description} price={producto.price} pictureUrl={producto.pictureUrl} stock={producto.stock} />;
            })}  
          </Col>
              
        </div>
    );
}
export default ItemList