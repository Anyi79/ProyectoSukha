import { Link, useLoaderData } from "react-router-dom";
import { Container, Row, Col, Card, Table, Button } from 'react-bootstrap';
import { BsHeartFill } from 'react-icons/bs';
import "../Style/AdminView.css";
import { useState, useEffect } from 'react';
import React from "react";
import { productsHandler } from '../handlers/productHandler';

function AdminView() {
  const { products } = useLoaderData();

  const handleAddProduct = () => {
    // Aquí deberías añadir la lógica para agregar un nuevo producto a la lista
  };

  async function deleteProduct (id) {
    await productsHandler.deleteProduct(id) 
  }

  return (
    <Container>
    <Row>
      <Col>
       
        <Card>
          <Card.Body>
            <Card.Text>Usuarios</Card.Text>
            <Card.Text>Productos</Card.Text>
            <Card.Text>Pedidos</Card.Text>
            <Card.Text>Estadísticas</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Button  href="/addProduct" >Agragar producto</Button>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Producto</th>
              <th>Price</th>
              <th>Estado</th>
              <th>Marca</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price} €</td>
                <td>{}</td>
                <td>{product.brand}</td>
                <td>Opciones</td>
                <div className="d-flex justify-content-right">
                <Button variant="primary"  href="/editProduct" style={{ backgroundColor: '#511A29', border: 'none', '1.5rem': '1.2rem', marginTop: '15px', borderRadius: '0' }} >Editar</Button>
                <Button variant="primary" style={{ backgroundColor: '#511A29', border: 'none', '1.5rem': '1.2rem', marginTop: '15px', borderRadius: '0' }} onClick={() => deleteProduct(product.id)}>Eliminar Producto</Button>
                
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
