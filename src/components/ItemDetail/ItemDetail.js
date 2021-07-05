import React, { useState, useContext } from 'react';
import {Row, Col, Container, Button} from 'react-bootstrap';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import {Link} from 'react-router-dom';
import CartContext from '../../context/CartContext';

function ItemDetail ({id, title, description, price, pictureUrl, stock}) {
    const [cartCount, setCartCount] = useState(0);
    const { addToCart, cart, clear, removeFromCart, isInCart } = useContext(CartContext);

    function onAdd(cantidad){
        setCartCount(cantidad);
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
        <Container className="detalleProducto">
            <Row>
                <Col> 
                    <img className="imagenProd" src={pictureUrl} alt="Producto" />
                </Col>
                <Col>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <p>Precio: ${price}</p>
                    {cartCount >= 1 ? (
                        <>
                            <p>Agregaste{cartCount} items al carrito</p>
                            <Link to="/cart" className="mt-2 btn btn-outline-secondary">Terminar compra</Link>
                        </>
                    ) : (
                        <ItemCount stock={stock} initial={1} onAdd={onAdd}/>  
                    )}                    

                  

                </Col>   
            </Row> 
        </Container>       
    );
}
  
export default ItemDetail;