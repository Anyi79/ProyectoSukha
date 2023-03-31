import { useState } from 'react';
import { productsHandler } from '../handlers/productHandler';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLoaderData } from 'react-router-dom';


function EditProduct() {
/* const [previewImage, setPreviewImage] = useState(null); */
  const [name, setName] = useState('product.name');
const [category, setCategory] = useState('product.category'); 
  const [price, setPrice] = useState('product.price');
  const [brand, setBrand] = useState('product.brand');
const [description, setDescription] = useState('product.description');
/*   const [stock, setStock] = useState('');  */
const { product } = useLoaderData();
const id = product.id;
 
const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    const imageReader = new FileReader();

    imageReader.onload = () => {
      setPreviewImage(imageReader.result);
    };

    if (selectedImage) {
      imageReader.readAsDataURL(selectedImage);
    }
  }; 
  
  const handleNameChange = (event) => {
    let nameInput = event.target.value;
    setName(nameInput);
};

  const handleCategoryChange = (event) => {
    let categoryInput = event.target.value;
    setCategory(categoryInput);
  };

  const handlePriceChange = (event) => {
    let priceInput = event.target.value;
    setPrice(priceInput);
  };

  const handleBrandChange = (event) => {
    setBrand(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

/*   const handleStockChange = (event) => {
    setStock(event.target.value);
  }; */

  const handleSubmit = (event) => {
    event.preventDefault();
    let updateProduct = { name,price, brand };

    productsHandler.updateProduct(updateProduct);
  };


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
        <Form.Control type="text" placeholder="Ingresa el nombre del producto"  onChange={handleNameChange} />
      </Form.Group>



      <Form.Group controlId="productCategory">
        <Form.Label>Categoría del producto</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Ingresa la categoría del producto"  onChange={handleCategoryChange} />
      </Form.Group>


      <Form.Group controlId="productBrand">
        <Form.Label>Marca del producto</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Ingresa la marca del producto"  onChange={handleBrandChange} />
      </Form.Group>

      <Form.Group controlId="productDescription">
        <Form.Label>Descripción del producto</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Ingresa la descripción del producto"  onChange={handleDescriptionChange} />
      </Form.Group>

    
      <Form.Group controlId="productPrice">
        <Form.Label>Precio del producto</Form.Label>
        <Form.Control type="number" placeholder="Ingresa el precio del producto" onChange={ handlePriceChange} />
      </Form.Group>


      <Button variant="primary" type="submit"  style={{ backgroundColor: '#511A29', border: 'none', '1.5rem' : '1.2rem' }}>
        Agregar producto
      </Button>
    </Form>
  );
}
 
export default EditProduct;