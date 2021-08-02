import React, { useState, useContext } from 'react';
import {Row, Col, Container, Button} from 'react-bootstrap';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import {Link} from 'react-router-dom';
import CartContext from '../../context/CartContext';

function ItemDetail ({id, title, description, price, pictureUrl, stock}) {
    const [cartCount, setCartCount] = useState(0);
    // const { addToCart} = useContext(CartContext);
    const [mostrarMsj, setMostrarMsj] = useState(0);
    const { addToCart, isInCart } = useContext(CartContext);
    const image = require(`../../assets/Productos/${pictureUrl}`).default;

    function onAdd(cantidad){
        setMostrarMsj(1);
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
        if(isInCart(addItem.item)){
            setMostrarMsj(2)
        }
        else{
            setCartCount(cantidad);        
            addToCart(addItem);
        }
    }
    return (
        <Container className="detalleProducto">
            <Row>
                <Col> 
                    <img className="imagenProd" src={image} alt="Producto" />
                </Col>
                <Col>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <p>Precio: ${price}</p>
                    
                    {mostrarMsj !== 0 ? (
                        <>
                            { mostrarMsj === 1 ? (
                                <p id="mensaje-prod">Fueron agregados {cartCount} items al carrito.</p>
                            ) : (
                                <p id="mensaje-prod">El producto ya esta en el carrito.</p>
                            )}
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