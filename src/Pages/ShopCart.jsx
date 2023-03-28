import { useState } from "react";
import React from "react";
import { Card, Container, Row, Col, Button } from 'react-bootstrap';



const ShopCart = () => {
  const [cartProducts, setCartProducts] = useState(JSON.parse(localStorage.getItem("cartProducts")) || []);
  console.log(cartProducts)

  const removeCartProducts = () => {
    localStorage.removeItem("cartProducts");
    setCartProducts([]);
  }
  return (
    <div>
      {cartProducts.map((product) => {
        return (
          <Container>
            <Row>
              <Col md={8}  >
                <Card key={product.id}>
                  <Card.Body>
                    <Row>

                      {/*  <Col md={4}>
                <Card.Img variant="top" src="producto1.jpg" />
              </Col> */}
                      <Col md={8}>
                        <Card.Title>{product.name}</Card.Title>
                        <Row>
                    <Col md={4}>Precio por unidad: $10</Col>
                    <Col md={4}>Cantidad: 2</Col>
                    <Col md={4}>Total: $20</Col>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Total del Pedido</Card.Title>
              <Row>
                <Col md={8}>Subtotal</Col>
                <Col md={4}>$20</Col>
              </Row>
              <Row>
                <Col md={8}>Impuestos</Col>
                <Col md={4}>$2</Col>
              </Row>
              <hr />
              <Row>
                <Col md={8}><strong>Total</strong></Col>
                <Col md={4}><strong>$22</strong></Col>
              </Row>
              <Button variant="primary" className="mt-3" block>Comprar</Button>
                    
                  </Card.Body>
                </Card>
              </Col>
            </Row>

          </Container>
        )
      })}


    </div>
  );

}
export default ShopCart;