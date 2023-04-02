import { useState } from 'react';
import ProductHandlerAPI from '../handlers/productHandlerAPI';
import { Form, Button, FormGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


function ProductForm() {
/* const [previewImage, setPreviewImage] = useState(null); */
  const [name, setName] = useState('');
const [category, setCategory] = useState(''); 
  const [price, setPrice] = useState('');
  const [brand, setBrand] = useState('');
const [description, setDescription] = useState('');
const [stock, setStock] = useState('');
const [image, setImage] = useState(null);

 
 
const handleImageChange = (event) => {
  const image = event.target.files[0];
  const extension = image.name.split('.').pop();
  const reader = new FileReader();
  reader.readAsDataURL(image);  
  reader.onload = () => {
    const base64String = reader.result.split(",")[1];
    console.log(base64String);
    setImage("image", base64String);
    setImage ("extension", extension);
    console.log(extension);
    };console.log(image);
    
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleBrandChange = (event) => {
    setBrand(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

const handleStockChange = (event) => {
    setStock(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let newProduct = { name, price, brand, category, stock, description, image };

    ProductHandlerAPI.addProduct(newProduct);
  }


  return (
    <Form onSubmit={handleSubmit} style={{padding: '5vw', margin:'auto'}}>
    <Form.Group className="mb-3" >
      <div className='centerText' style={{marginLeft: '5vw'}}><Form.Label>Upload Image:</Form.Label></div>
      <Form.Control
        id="image"
        type="file"
        style={{width:'75vw', marginLeft: '5vw'}}
        accept="image/*"
        onChange={handleImageChange} />
      {/* {previewImage && (
        <img src={`data:image/jpg;base64,${picture}`} alt="View image" />
      )} */}
      <div className="input-container" style={{width:'80vw', height:'100px'}}>
      
      <Form.Group controlId="productName" style={{marginLeft: '5vw'}}>
        <Form.Label>Producto</Form.Label>
        <Form.Control type="text" placeholder="Ingresa el nombre del producto" value={name} onChange={handleNameChange}  style={{ border: 'none', '1.5rem': '1.2rem'}}/>
      </Form.Group>

      <Form.Group controlId="productCategory" style={{marginLeft: '5vw'}}>
        <Form.Label>Categoría del producto</Form.Label>
        <Form.Control type="text" rows={1} placeholder="Ingresa la categoría del producto" value={category} onChange={handleCategoryChange} style={{ border: 'none', '1.5rem': '1.2rem'}}/>
      </Form.Group>

      <Form.Group controlId="productBrand" style={{marginLeft: '5vw'}}>
        <Form.Label style={{color:'#511A29'}}>Marca del producto</Form.Label>
        <Form.Control type="text" rows={1} placeholder="Ingresa la marca del producto" value={brand} onChange={handleBrandChange} style={{ border: 'none', '1.5rem': '1.2rem'}}/>
      </Form.Group>

      <Form.Group controlId="productPrice" style={{marginLeft: '5vw'}}>
        <Form.Label>Precio del producto</Form.Label>
        <Form.Control type="number" placeholder="Ingresa el precio del producto" value={price} onChange={ handlePriceChange}  style={{ border: 'none', '1.5rem': '1.2rem'}}/>
      </Form.Group>

      <Form.Group controlId="stock" style={{marginLeft: '5vw'}}>
        <Form.Label>Stock del producto</Form.Label>
        <Form.Control type="number" placeholder="Ingresa el stock del producto" value={stock} onChange={ handleStockChange}  style={{ border: 'none', '1.5rem': '1.2rem'}}/>
      </Form.Group>

     
      </div>
      <div>
      <Form.Group controlId="productDescription" style={{marginTop:'18vh', marginLeft: '5vw'}}>
        <Form.Label>Descripción del producto</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Ingresa la descripción del producto" value={description} onChange={handleDescriptionChange} style={{width:'75vw'}}/>
      </Form.Group>
      </div>


      <Button variant="primary" type="submit" onClick={handleSubmit}  Submit style={{ width:'12vw', borderRadius:'5px', backgroundColor: '#511A29', border: 'none', '1.5rem': '1.2rem', borderRadius: '0', marginTop: '20px', marginLeft: '30vw', fontSize: '20px', size: '20 px'}}>
        Agregar
      </Button>
      <Link to={`/adminView/`} ><Button variant="primary" type="button" style={{ width:'12vw', borderRadius:'5px', backgroundColor: '#511A29', border: 'none', '1.5rem': '1.2rem', borderRadius: '0', marginTop: '20px', marginLeft: '5vw', fontSize: '20px', size: '20 px'}}>
        Volver
      </Button></Link>
    </Form.Group>
    </Form>
  );
}
 
export default ProductForm;