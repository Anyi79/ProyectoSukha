import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Table, Button } from 'react-bootstrap';
import "../Style/AdminView.css";
import { useState, useEffect } from 'react';
import React from "react";
import AddProduct from "./AddProduct";
import ProductHandlerAPI from '../handlers/productHandlerAPI'
import { BsTrashFill } from 'react-icons/bs';
import { BsFillPencilFill } from "react-icons/bs";
import {BsPersonFill} from 'react-icons/bs';
import {RiPrinterFill}  from 'react-icons/ri';
import {ImTruck} from 'react-icons/im';
import {FcStatistics} from 'react-icons/fc';



function AdminView() {

  const [products, setProducts] = useState([]);


  useEffect(() => {
      getData();
    }, []);

    const getData = async () => {
      const data = await ProductHandlerAPI.loadProducts();
      setProducts(data);
    };



console.log(products);  
  const handleAddProduct = () => {
   
  };

  async function deleteProduct (id) {
    setProducts(products.filter((p) => p.id !== id));
        await ProductHandlerAPI.deleteProduct(id)
  }

  


  return (
    <div>
    <Container>
    <Row>
      <Col>
       
        <Card style={{width: '250px' , height: '500px', backgroundColor: '#7E6268', border: 'none', borderRadius: '0', width: '300px' }}>
          <Card.Body style={{fontSize: '20px'}}>
            <Card.Text style={{color:'white'}}><BsPersonFill className="my-icon mr-2" style={{ backgroundColor: 'none', color:'white', marginBottom: '10px', size: '20px'}}/>  Usuarios</Card.Text>
            <Card.Text style={{color:'white'}}><RiPrinterFill className="my-icon mr-2" style={{ backgroundColor: 'none', color:'white', size: '2em', marginBottom: '10px', size: '4em'}}/>  Productos</Card.Text>
            <Card.Text style={{color:'white'}}><ImTruck className="my-icon mr-2" style={{ backgroundColor: 'none', color:'white', size: '2em', marginBottom: '10px', size: '4em'}}/>  Pedidos</Card.Text>
            <Card.Text style={{color:'white', size: '30px'}}><FcStatistics className="my-icon mr-2" style={{ backgroundColor: 'none', color:'white', size: '2em', marginBottom: '10px', size: '4em'}}/> Estadísticas</Card.Text>
        </Card.Body>
        </Card >
      </Col>
      <Col style={{backgroundColor: '#7E6268' }}>
      <Link to={`/addProduct/`}><div className="d-flex justify-content-center" style={{ marginBottom: '20px', marginTop: '20px'}}><Button style={{ backgroundColor: '#511A29', border: 'none', '1.5rem': '1.2rem', borderRadius: '0'}}>Agregar producto</Button></div></Link>
      
        <Table striped bordered hover style={{backgroundColor: '#D6C6B4', color:'#511A29', width: '900px' }}>
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
            {products && products.map((product) =>(
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price} €</td>
                <td>{product.isActive ? "Activo" : "Inactivo"}</td>
                <td>{product.brand}</td>
                <td>23</td>
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
  <div syle={{margin:'auto', textAlign: 'center'}}>
    <Link to={`/`}><Button variant="primary" type="button" style={{ width:'12vw', borderRadius:'5px', backgroundColor: '#511A29', border: 'none', '1.5rem': '1.2rem', borderRadius: '0', marginTop: '4vh', marginLeft:'55vw', fontSize: '20px', size: '20 px'}}>
        Volver
      </Button></Link>
      </div>
  </div>
);
};
export default AdminView;
