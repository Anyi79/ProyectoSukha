import { useState } from "react";
import React from "react";
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import visa from '../Img/visa.png';
import paypal from '../Img/paypal.jpg';
import gpay from '../Img/gpay.jpg';
import mastercard from '../Img/mastercard.png';
import { FaRegHeart } from 'react-icons/fa';



const ShopCart = () => {
  const [cartProducts, setCartProducts] = useState(JSON.parse(localStorage.getItem("cartProducts")) || []);
  console.log(cartProducts)

  const removeCartProducts = () => {
    localStorage.removeItem("cartProducts");
    setCartProducts([]);
  }
  const quantity = cartProducts.reduce((acc, product) => {
    return acc + product.quantity;
  },0);

/*    const SubTotalProduct = (quantity, product)=>{
    return product.quantity * product.price;
   }
 */
  const subTotal = cartProducts.reduce((acc, product) => {
    return acc + (product.quantity * product.price);
  }, 0);

  const impuestos = cartProducts.reduce((acc, product) => {
    return acc + (product.quantity * product.price * 0.21);
  }, 0);
   
const getTotalWithTaxes = (subtotal, taxes) => {
  return subtotal + taxes;
};

const totalWithTaxes = getTotalWithTaxes(subTotal, impuestos);


  return (
    <div>
      <Container>
        <Row>
          <Col md={8}  >
            {cartProducts.map((product) => {
              return (
                <Card key={product.id}>
                  <Card.Body style={{ borderRadius: '0',  border: ' none', backgroundColor: '#7E6268',color:'white'}}>
                    <Row>

                      <Col md={4}>
                <Card.Img variant="top" src="producto1.jpg" />
              </Col>
                      <Col md={8}>
                        <Card.Title>{product.name}</Card.Title>
                        <Row>
                          <Col md={4}>{product.price} €</Col>
                          <Col md={4}>{product.quantity}</Col>
                          <Col><Button variant="primary " size="lg" style={{ backgroundColor: 'transparent', border: 'none' }}>
                      < FaRegHeart style={{ backgroundColor: 'none', color: '#511A29', size: '2em' }} />
                    </Button></Col>
                          
                        </Row>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              )
            })}
             <div className="d-flex justify-content-right">
                <Button variant="primary"  style={{ backgroundColor: '#511A29', border: 'none', '1.5rem': '1.2rem', marginTop: '15px' }} onClick={() => removeCartProducts()}>Vaciar Carrito</Button>
                </div>
          </Col>
          <Col md={4}>
            <Card style={{ borderRadius: '0',  border: ' none', backgroundColor: '#7E6268',}}>
              <Card.Body style={{color:'white'}}>
                <Card.Title>Subtotal compra: {subTotal} €</Card.Title>
              {/*   <Row>
                  <Col md={8}>Subtotal</Col>
                  <Col md={4}>$20</Col>
                </Row> */}
                <Row>
                  <Col md={8}>Impuestos</Col>
                  <Col md={4}>{impuestos} €</Col>
                </Row>
                <hr />
                <Row>
                  <Col md={8}><strong>Total Compra</strong></Col>
                  <Col md={4}><strong>{totalWithTaxes} €</strong></Col>
                </Row>
                <div className="d-flex justify-content-center">
    <Button variant="primary" style={{ backgroundColor: '#511A29', border: 'none', '1.5rem': '1.2rem', marginTop: '15px' }}>Comprar</Button>
  </div>
  </Card.Body>
  <Card style={{backgroundColor: '#D6C6B4', border: ' none', borderRadius: '0'}}>
  <Card.Title style={{marginBottom: '15px', marginTop: '20px', backgroundColor: '#D6C6B4'}} >Aceptamos</Card.Title>
  <Row  >
                  <Col ><img src={visa} alt="visa"  style={{height: 60}}/></Col>
                  <Col ><img src={paypal} alt="paypal" style={{height: 60}}/></Col>
                  <Col ><img src={gpay} alt="gpay" style={{height: 60}}/></Col>
                  <Col><img src={mastercard} alt="mastercard" style={{height: 60, marginTop: '20px'}}/></Col>

                </Row>

                </Card>
              
              
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );

}
export default ShopCart;


    <img src={mastercard} alt="mastercard" style={{height: 60}}/>