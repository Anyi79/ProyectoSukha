import { useLoaderData } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { BsHeartFill } from 'react-icons/bs';
import { BsTrashFill } from 'react-icons/bs';
//import "../Style/ProductInfo.css";
import { BsFillPencilFill } from "react-icons/bs";




function ProductInfo() {

  const { product } = useLoaderData();

  const { id, name, description, category, brand, price, image } = product;

  return (
    <>

      <Card key={product.id} className="my-3" style={{ width: '18rem' }}>
        {/*  <Card.Img variant="top" src={product.image} />  */}
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>{product.category}</Card.Text>
          <Card.Text>{product.brand}</Card.Text>
          <Card.Text>{product.price}€</Card.Text>
          
          <div className="d-flex justify-content-end mt-5 align-items-end">
          <Button variant="primary" style={{ backgroundColor: 'transparent', border: 'none' }} className="mr-auto mx-2" href="/productInfo/:id">
          < BsHeartFill style={{ backgroundColor: '#511A2', color: '#511A29', size: '10rem' }} /></Button>
          <Button variant="primary" style={{ backgroundColor: 'transparent', border: 'none' }} className="mr-auto mx-2" href="/productInfo/:id">
          <BsFillPencilFill className="my-icon mr-2" style={{ backgroundColor: 'none', color: '#511A29', size: '2em' }}/>
          </Button>
          <Button variant="primary" style={{ backgroundColor: 'transparent', border: 'none' }} className="mr-auto mx-2" onClick={() => deleteProduct(id)}>
          <BsTrashFill className="my-icon mr-2" style={{ backgroundColor: 'none', color: '#511A29', size: '2em' }}/></Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );




}

export default ProductInfo