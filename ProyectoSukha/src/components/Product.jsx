import { Link, useLoaderData } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { Row,Col,Container } from 'react-bootstrap'; 
import { BsHeartFill } from 'react-icons/bs';



function Product() {
  const { products } = useLoaderData();
  console.log(products);
  return (
    <>
      {products.map((product) => (
        <Card key={product.id} className="my-3" style={{ width: '18rem' }}>
          <Card.Body >
          <Card.Img variant="top" src={`data:image/png;base64,${products.content}`} class="card-img-top rounded img-fluid" /> 
            <Card.Title>{product.name}</Card.Title>
          
            <Card.Text>{product.brand}</Card.Text>
            <Card.Text>{product.price}€</Card.Text>
            <div className="d-flex justify-content-end">

            <Row style={{ flexDirection: 'column' }}>

            <Col className="mb-3">
            <Button variant="primary" style={{ backgroundColor: 'transparent', border: 'none', color: '#511A29'}} href={`/productInfo/${product.id}`}> Más información</Button>
            </Col>
            
            <Col>
            <Button variant="primary" style={{ backgroundColor: '#511A29', border: 'none' }}>Añadir a la cesta</Button>
            <Button variant="primary"  style={{ backgroundColor: 'transparent', border: 'none' }}>
            < BsHeartFill style={{ backgroundColor: '#511A2', color: '#511A29', size: '10rem' }} />
            </Button>
            </Col>
         
            </Row>
        </div>
          </Card.Body>
        </Card>
      ))}
    </>
  )
}
export default Product;