import { Link, useLoaderData } from "react-router-dom";
import { Container, Row, Col, Card, Table, Button } from 'react-bootstrap';
import { BsHeartFill } from 'react-icons/bs';
import "../Style/AdminView.css";
import { useState, useEffect } from 'react';
import React from "react";
import { ListGroup, ListGroupItem } from 'react-bootstrap';

function AdminView() {
  const [products, setProducts] = useState([]);

  const handleAddProduct = () => {
    // Aquí deberías añadir la lógica para agregar un nuevo producto a la lista
  };

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
        <h2>Lista de productos</h2>
        <Button onClick={handleAddProduct}>Agragar producto</Button>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Producto</th>
              <th>Categoría</th>
              <th>Estado</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.category}</td>
                <td>{product.name}</td>
                <td>{product.state}</td>
                <td>Opciones</td>
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
