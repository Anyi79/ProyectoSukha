import { useLoaderData } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { BsHeartFill } from 'react-icons/bs';
import { BsTrashFill } from 'react-icons/bs';
import "../Style/ProductInfo.css";
import { BsFillPencilFill } from "react-icons/bs";
import ProductHandlerAPI from '../handlers/productHandlerAPI';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';




function ProductInfo() {

  const {id} = useParams();
  const [product, setProduct] = useState([null])

  useEffect(() => {
    async function fetchProduct() {
      const productData = await ProductHandlerAPI.loadProduct(id);
      setProduct(productData);
    }
    fetchProduct();
  }, [id]);

  async function deleteProduct (id) {
    await ProductHandlerAPI.deleteProduct(id) 
  }

  return (
    <>

      <Card key={product.id} className="my-3" style={{ width: '30rem', marginLeft:'35em'}}>
        {/*  <Card.Img variant="top" src={product.image} />  */}
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>{product.category}</Card.Text>
          <Card.Text>{product.brand}</Card.Text>
          <Card.Text>{product.price}€</Card.Text>
          <Card.Img variant="top" src={`data:image/png;base64,${product.content}`} class="card-img-top rounded img-fluid" style={{ width: '17vw', textAlign:'center', margin:'auto', marginLeft: '5vw', padding: '1vw' }} />
          
          <div className="d-flex justify-content-end mt-5 align-items-end">
          <Button variant="primary" style={{ backgroundColor: 'transparent', border: 'none' }} className="mr-auto mx-2" href="/productInfo/:id">
          < BsHeartFill style={{ backgroundColor: '#511A2', color: '#511A29', size: '10rem' }} /></Button>
          <Button variant="primary" style={{ backgroundColor: 'transparent', border: 'none' }} className="mr-auto mx-2" href="/productInfo/:id">
          <BsFillPencilFill className="my-icon mr-2" style={{ backgroundColor: 'none', color: '#511A29', size: '2em' }}/>
          </Button>
          <Button variant="primary" style={{ backgroundColor: 'transparent', border: 'none' }} className="mr-auto mx-2" onClick={() => deleteProduct(product.id)}>
          <BsTrashFill className="my-icon mr-2" style={{ backgroundColor: 'none', color: '#511A29', size: '2em' }}/></Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );




}

export default ProductInfo;
