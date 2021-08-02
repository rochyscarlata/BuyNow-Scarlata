import { Link } from 'react-router-dom';
import React, { useContext, useEffect } from 'react';
import CartContext from '../../context/CartContext';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Cart.css';

function Cart() {
    const { cart, removeFromCart, cartTotal, setCartTotal } = useContext(CartContext);
    useEffect(()=>{
        let suma = 0;
        cart.forEach(item => {
            suma = suma + (item.item.price * item.quantity);
          });
        setCartTotal(suma);
    })
    return (
        <Container className="cartContainer">
            <Row>
                <Col>
                    <h2 className="text-center">Carrito</h2>
                    {cart.length === 0 ? 
                        <div className="cartSinItems">
                            <h4>No hay items en el carrito para mostrar.</h4>
                            <Link to="/"><Button>Volver a la tienda</Button></Link>
                        </div>
                    : 
                        <div className="cartItems">
                            <table>
                                <thead>
                                    <tr>
                                        <th className="product-thumbnail">&nbsp;</th>
                                        <th className="product-name">Producto</th>
                                        <th className="product-price">Precio</th>
                                        <th className="product-quantity">Cantidad</th>
                                        <th className="product-subtotal">Subtotal</th>
                                        <th className="product-remove">&nbsp;</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.map(producto => {
                                        const image = require(`../../assets/Productos/${producto.item.pictureUrl}`).default;
                                        return <tr className="cartItem" key={producto.item.id}>
                                            <td className="product-thumbnail"><img src={image} alt="producto" /></td>
                                            <td className="product-name">{producto.item.title}</td>
                                            <td className="product-price">{producto.item.price}</td>  
                                            <td className="product-quantity">{producto.quantity}</td>
                                            <td className="product-subtotal">{producto.item.price * producto.quantity}</td>
                                            <td className="product-remove"><Button onClick={()=> removeFromCart(producto.item.id)}>X</Button></td>
                                        </tr>;
                                    })}                                     
                                </tbody>   
                            </table>
                            <div className="cartTotal">
                                <h5>Total: {cartTotal}</h5>
                            </div>
                        </div>
                    }
                </Col>
            </Row>
            {cart.length > 0 &&
                <Row>
                    <Col className="text-right mt-4">
                        <Link to="/checkout"><Button>Finalizar Compra</Button></Link>
                    </Col>
                </Row>
            }
        </Container>
        
    );
}
  
export default Cart;