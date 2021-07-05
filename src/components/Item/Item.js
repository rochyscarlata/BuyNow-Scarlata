import React, {useContext} from "react";
import ItemCount from "../ItemCount/ItemCount"
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';

import { Card } from "react-bootstrap";

 const Item = ({ id, title, description, price,stock, pictureUrl }) => {
  const { addToCart } = useContext(CartContext);

  function onAdd(cantidad){
    let addItem = {
        item: {
            id: id,
            title: title,
            description: description,
            price: price,
            pictureUrl: pictureUrl,
            stock: stock
        },
        quantity: cantidad
    };
    addToCart(addItem);
}
  return (
    <>
   

   
    <Card style={{ width: '15rem' }} className="text-center">
    <Link to={`/item/${id}`} className="links">
  <Card.Img variant="top" src={pictureUrl} />
  </Link>
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text>
      {description}
    </Card.Text>
    <Card.Text>
      ${price}
    </Card.Text>
 
    <ItemCount stock={stock} initial={1} onAdd={onAdd} />
  </Card.Body>
</Card>

</>
 
  );
};

export default Item