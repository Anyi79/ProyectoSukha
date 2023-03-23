/* import { useState } from 'react';
import { productsHandler } from '../handlers/productHandler';
import { Form, Button } from 'react-bootstrap';
import "../Style/AddProduct.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function ProductForm() {
const [previewImage, setPreviewImage] = useState(null);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [brand, setBrand] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    let newProduct = { name, description, category, brand, price };

    productsHandler.addProduct(newProduct);
  }


  return (
    <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3">
      <div className='centerText'><Form.Label>Upload Image:</Form.Label></div>
      <Form.Control
        id="StyleControl"
        type="file"
        accept="image/*"
        onChange={(event) => setPreviewImage(event.target.value)} />
      {previewImage && (
        <img src={previewImage} alt="View image" />
      )}
    </Form.Group>

      <Form.Group controlId="productName">
        <Form.Label>Producto</Form.Label>
        <Form.Control type="text" placeholder="Ingresa el nombre del producto" value={name} onChange={(event) => setName(event.target.value)} />
      </Form.Group>



      <Form.Group controlId="productCategory">
        <Form.Label>Categoría del producto</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Ingresa la categoría del producto" value={category} onChange={(event) => setCategory(event.target.value)} />
      </Form.Group>


      <Form.Group controlId="productBrand">
        <Form.Label>Marca del producto</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Ingresa la marca del producto" value={brand} onChange={(event) => setBrand(event.target.value)} />
      </Form.Group>

      <Form.Group controlId="productDescription">
        <Form.Label>Descripción del producto</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Ingresa la descripción del producto" value={description} onChange={(event) => setDescription(event.target.value)} />
      </Form.Group>

    
      <Form.Group controlId="productPrice">
        <Form.Label>Precio del producto</Form.Label>
        <Form.Control type="number" placeholder="Ingresa el precio del producto" value={price} onChange={(event) => setPrice(event.target.value)} />
      </Form.Group>


      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Agregar producto
      </Button>
    </Form>
  );
}
 
export default ProductForm; */