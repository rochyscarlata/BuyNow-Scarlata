import React, { useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import './Item.css'
import { Card, Col} from "react-bootstrap";

const Item = ({ id, title, description, price, stock, pictureUrl }) => {
  const { addToCart } = useContext(CartContext);
  const image = require(`../../assets/Productos/${pictureUrl}`).default;
  function onAdd(cantidad) {
    let addItem = {
      item: {
        id: id,
        title: title,
        description: description,
        price: price,
        pictureUrl: pictureUrl,
        stock: stock,
      },
      quantity: cantidad,
    };
    addToCart(addItem);
  }
  return (
    <>
    <Col >
      <Card className="text-center card">
        <Link to={`/item/${id}`} className="links">
          <Card.Img className="cardImage" variant="top" src={image} />
        </Link>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>${price}</Card.Text>

          <ItemCount stock={stock} initial={1} onAdd={onAdd} />
        </Card.Body>
      </Card>
      <br></br>
      </Col>
    </>
  );
};

export default Item;
