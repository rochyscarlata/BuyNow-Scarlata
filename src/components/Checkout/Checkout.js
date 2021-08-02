import './Checkout.css';
import { Link } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import CartContext from '../../context/CartContext';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { getFirestore } from '../../factory/firebase';
import  firebase from 'firebase/app';

function Checkout() {
    const { cart, cartTotal, setCartTotal } = useContext(CartContext);
    useEffect(()=>{
        let suma = 0;
        cart.forEach(item => {
            suma = suma + (item.item.price * item.quantity);
          });
        setCartTotal(suma);
    })
    
    const [loading, setLoading] = useState(false);
    const [pedidoRealizado, setPedidoRealizado] = useState('');
    const saveOrder = () => {
        let inputName = document.getElementById('name').value;
        let inputPhone = document.getElementById('email').value;
        let inputEmail = document.getElementById('phone').value;
        if(inputName === "" || inputPhone === "" || inputEmail === ""){
            document.getElementById('error-checkout').classList.add("active");
        }
        else {
            document.getElementById('error-checkout').classList.remove("active");
            setLoading(true);
            const db = getFirestore();
            const order = db.collection('orders');
            const newOrder = {
            buyer: {
                email: inputEmail,
                name: inputName,
                phone: inputPhone
            },
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: cartTotal,
            items: cart
            };
            order
            .add(newOrder)
            .then(({ id }) => {
                setLoading(false);            
                setPedidoRealizado(id);
            })
            .catch(error => {
                setLoading(false);
                console.log(error);
            });
        }
    };
    return (
        <Container className="checkoutContainer">
            <Row>
                <Col>
                <h2 className="text-center finalizar-tit">Finalizar Compra</h2>
                    {cart.length === 0 ? 
                        <div className="cartSinItems">
                            <h4>No hay items en el carrito para comprar.</h4>
                            <Link to="/"><Button>Volver a la tienda</Button></Link>
                        </div>
                    : 
                        <div className="checkoutForm">   
                            <h4 className="text-center mb-2">Completa tus datos para terminar la compra.</h4>
                            <p id="error-checkout">Todos los campos son obligatorios para continuar.</p>
                            {pedidoRealizado==='' &&                      
                                <form className="form-group" autocomplete="off">
                                    <input className="form-control" id="name" type="text" placeholder="Nombre" autocomplete="off"/>
                                    <input className="form-control" id="email" placeholder="E-mail" />
                                    <input className="form-control" id="phone" autocomplete="off" type="text" placeholder="Teléfono" />
                                </form>
                            }
                            <div className="checkoutTotal">
                                {pedidoRealizado==='' &&       
                                    <h5>Total de la orden: <b>${cartTotal}</b></h5>      
                                }                          
                                {loading ? 
                                    <div className="loader">Cargando...</div> 
                                    :
                                    pedidoRealizado==='' ? <Button onClick={() => saveOrder()}>Realizar Pedido</Button> : 
                                    <div className="compraFinalizada text-center">
                                        <p>Su pedido fue realizado con éxito!</p>
                                        <Link to="/"><Button>Volver a la tienda</Button></Link>
                                    </div>
                                }
                            </div>
                        </div>
                    }
                </Col>
            </Row>
        </Container>
        
    );
}
  
export default Checkout;
