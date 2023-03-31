import { Link, useLoaderData } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { Row, Col, Container } from 'react-bootstrap';
import { BsHeartFill } from 'react-icons/bs';
import "../Style/Product.css";
import { useState, useEffect } from 'react';
import React from "react";
import ProductHandlerAPI from "../handlers/productHandlerAPI";
import '../Style/ProductScroll.css';

function ProductScroll() {

  const [products, setProducts] = useState([]);


    useEffect(() => {
        getData();
      }, []);

      const getData = async () => {
        const data = await ProductHandlerAPI.loadProducts();
        setProducts(data);
      };
  
  console.log(products);  
  
  
  const cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];

  

  const addToCart = async (product, quantity) => {
    console.log("cart product array", cartProducts);
    
    // Comprueba si el producto ya está en el carrito
    const existingProduct = cartProducts.find(p => p.id === product.id);
    
    if (existingProduct) {
      // Si el producto ya está en el carrito, aumenta la cantidad
      existingProduct.quantity += quantity;
    } else {
      // Si el producto no está en el carrito, añade el producto y la cantidad
      cartProducts.push({ ...product, quantity });
    }
  
    // Guarda los productos del carrito en el almacenamiento local
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  }
  

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const showNumProducts = windowSize >= 1200 ? 4 : 3;
  const cardWidth = windowSize >= 1200 ? '20rem' : '20rem';
  const cardHeight = windowSize >= 1200 ? '20rem' : '28rem';

    return (
      <Row className="d-flex flex-wrap justify-content-center">
        <div style={{ marginTop:'50px', marginLeft: '80px'}} className="text-right">
  <h2 id="Novedades" >Nuestras novedades</h2>
  </div>
  <div style={{ display: 'flex', overflowX: 'auto'}}> 
  {products.filter(product => product.isActive === true).map((product) => (
          <Col md={12 / showNumProducts} key={product.id} className="custom-col">
            <Card className="custom-card" style={{ width: cardWidth, height: cardHeight, margin: '30px 1em',  borderRadius: '0' }}>
              <div className="d-flex justify-content-center" style={{ marginTop: '30px' }} >
                <Card.Title>{product.name}</Card.Title>
              </div><Card.Img variant="top" src={`data:image/png;base64,${product.content}`} class="card-img-top rounded img-fluid" style={{ height: '12rem' }} />
              <Card.Body>
                <div className="d-flex justify-content-center">
                  {/*   <Card.Text>{product.description}</Card.Text> */}
                  </div>
                  </Card.Body>
              <Card.Footer style={{ borderTop: 'none' }}>
                <div className="d-flex justify-content-between align-items-center" style={{ marginBottom: '50px' }}>
                  <h5 style={{ fontSize: windowSize >= 1200 ? '1.5rem' : '1.2rem' }}>{product.price}€</h5>
                  <Button variant="outline-primary" style={{ backgroundColor: 'transparent', border: 'none', color: '#511A29', '1.5rem': '1.2rem' }} href={`/productInfo/${product.id}`}>Mas Info</Button>
                </div>
                <div className="d-flex justify-content-center" style={{ marginBottom: '20px' }}>
                  <Button variant="primary" style={{ backgroundColor: '#511A29', border: 'none', '1.5rem': '1.2rem',  borderRadius: '0' }} onClick={() => addToCart(product, 1)}>Añadir a la cesta</Button>
                </div>
              </Card.Footer>
            </Card>
          </Col>

    
  ))}
  </div>

</Row>

  
    );
  }
  export default ProductScroll;
  