import React from "react";
import Item from '../Item/Item';
import { Col, Row } from "react-bootstrap";
function ItemList ( { items } ) {
    return (
        <div className="itemList">
        <Row>
            
            {items.map(producto => {
                return <Item key={producto.id} id={producto.id} title={producto.title} description={producto.description} price={producto.price} pictureUrl={producto.pictureUrl} stock={producto.stock} />;
            })}  
            
        </Row>
         
     
              
        </div>
    );
}
export default ItemList