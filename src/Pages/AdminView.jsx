import { Link, useLoaderData } from "react-router-dom";
import { Container, Row, Col, Card, Table, Button } from 'react-bootstrap';
import { BsHeartFill } from 'react-icons/bs';
import "../Style/AdminView.css";
import { useState, useEffect } from 'react';
import React from "react";
import { productsHandler } from '../handlers/productHandler';
import { BsTrashFill } from 'react-icons/bs';
import { BsFillPencilFill } from "react-icons/bs";




function AdminView() {
  const { products } = useLoaderData();

  const handleAddProduct = () => {
   
  };

  async function deleteProduct (id) {
    await productsHandler.deleteProduct(id) 
  }


  return (
    <Container>
    <Row>
      <Col>
       
        <Card style={{width: '250px' , height: '500px', backgroundColor: '#7E6268'}}>
          <Card.Body>
            <Card.Text>Usuarios</Card.Text>
            <Card.Text>Productos</Card.Text>
            <Card.Text>Pedidos</Card.Text>
            <Card.Text>Estadísticas</Card.Text>
          </Card.Body>
        </Card >
      </Col>
      <Col style={{backgroundColor: '#7E6268' }}>
        <div className="d-flex justify-content-center" style={{ marginBottom: '20px', marginTop: '20px'}}><Button href="/addProduct" style={{ backgroundColor: '#511A29', border: 'none', '1.5rem': '1.2rem',  borderRadius: '0'}}>Agragar producto</Button></div>
      
        <Table striped bordered hover style={{backgroundColor: '#D6C6B4', color:'#511A29',  }}>
          <thead>
            <tr style={{color:'#511A29'}}>
              <th>ID</th>
              <th>Producto</th>
              <th>Price</th>
              <th>Estado</th>
              <th>Marca</th>
              <th>Stock</th>

            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price} €</td>
                <td>Activo</td>
                <td>{product.brand}</td>
                <td>{}</td>
                <div className="d-flex justify-content-right">
                
                <Button variant="primary" className="mx-2"   style={{ backgroundColor: 'transparent', border: 'none' }} href={`/editProduct/${product.id}`}>
                <BsFillPencilFill className="my-icon mr-2" style={{ backgroundColor: 'none', color: '#511A29', size: '2em' }}/>
                </Button>
                
                <Button variant="primary"  style={{ backgroundColor: 'transparent', border: 'none' }} onClick={() => deleteProduct(product.id)}>
                <BsTrashFill className="my-icon mr-2" style={{ backgroundColor: 'none', color: '#511A29', size: '2em' }}/>
                </Button>
                
               </div>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </Row>
  </Container>
);
};
export default AdminView;
