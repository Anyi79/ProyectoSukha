import { Link, useLoaderData } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { Row, Col, Container } from 'react-bootstrap';
import { BsHeartFill } from 'react-icons/bs';
import "../Style/Product.css";
import { useState, useEffect } from 'react';

function Product() {
  const { products } = useLoaderData();

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
    <Container>
      <Row className="d-flex flex-wrap justify-content-center">
        {products.slice(0, showNumProducts).map((product) => (
          <Col md={12/showNumProducts} key={product.id} className="custom-col">
            <Card className="custom-card" style={{ width: cardWidth, height: cardHeight }}>
              <div className="d-flex justify-content-center">
                <Card.Title>{product.name}</Card.Title>
              </div>
             {/*  <Card.Img variant="top" src={`data:image/png;base64,${products.content}`} class="card-img-top rounded img-fluid" style={{ height: '12rem' }} /> */}
              <Card.Body>
                <div className="d-flex justify-content-center">
                  {/*   <Card.Text>
                {product.description}
              </Card.Text> */}
                </div>
                
                  </Card.Body>
                  <Card.Footer style={{ borderTop:'none'}}>
                  <div className="d-flex justify-content-between align-items-center" style={{marginBottom:'50px'}}>
                  <h5 style={{ fontSize: windowSize >= 1200 ? '1.5rem' : '1.2rem' }}>{product.price}€</h5>
                  <Button variant="outline-primary" style={{ backgroundColor: 'transparent', border: 'none', color: '#511A29', '1.5rem' : '1.2rem' }} href={`/productInfo/${product.id}`}>Mas Info</Button>
                  </div>
                  <div className="d-flex justify-content-center">
                  <Button variant="primary" style={{ backgroundColor: '#511A29', border: 'none', '1.5rem' : '1.2rem' }}>Añadir a la cesta</Button>
                </div>
                  </Card.Footer>
                  </Card>
                  </Col>

        ))}
      </Row>
  
</Container>
 
  );
} 
export default Product;