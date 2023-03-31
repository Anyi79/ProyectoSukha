import { useState } from 'react';
import { productsHandler } from '../handlers/productHandler';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProductForm() {
/* const [previewImage, setPreviewImage] = useState(null); */
  const [name, setName] = useState('');
const [category, setCategory] = useState(''); 
  const [price, setPrice] = useState('');
  const [brand, setBrand] = useState('');
const [description, setDescription] = useState('');
/*   const [stock, setStock] = useState('');  */
 
 
/* const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    const imageReader = new FileReader();

    imageReader.onload = () => {
      setPreviewImage(imageReader.result);
    };

    if (selectedImage) {
      imageReader.readAsDataURL(selectedImage);
    }
  }; 
  */
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

/*   const handleStockChange = (event) => {
    setStock(event.target.value);
  }; */

  const handleSubmit = (event) => {
    event.preventDefault();
    let newProduct = { name,price, brand };

    productsHandler.addProduct(newProduct);
  }


  return (
    <Form onSubmit={handleSubmit}>
  {/*   <Form.Group className="mb-3">
      <div className='centerText'><Form.Label>Upload Image:</Form.Label></div>
      <Form.Control
        id="StyleControl"
        type="file"
        accept="image/*"
        onChange={(event) => setPreviewImage(event.target.value)} />
      {previewImage && (
        <img src={previewImage} alt="View image" />
      )}
    </Form.Group> */}
      <div className="input-container" style={{width:'950px', height:'100px'}}>
      <Form.Group controlId="productName">
        <Form.Label>Producto</Form.Label>
        <Form.Control type="text" placeholder="Ingresa el nombre del producto" value={name} onChange={handleNameChange}  style={{ border: 'none', '1.5rem': '1.2rem', borderRadius: '0', marginLeft: '20px'}}/>
      </Form.Group>


{/* 
      <Form.Group controlId="productCategory">
        <Form.Label>Categoría del producto</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Ingresa la categoría del producto" value={category} onChange={handleCategoryChange} />
      </Form.Group>
 */}

      <Form.Group controlId="productBrand">
        <Form.Label style={{color:'#511A29'}}>Marca del producto</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Ingresa la marca del producto" value={brand} onChange={handleBrandChange}  style={{ border: 'none', '1.5rem': '1.2rem', borderRadius: '0',  marginLeft: '20px'}}/>
      </Form.Group>

    {/*   <Form.Group controlId="productDescription">
        <Form.Label>Descripción del producto</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Ingresa la descripción del producto" value={description} onChange={handleDescriptionChange} />
      </Form.Group> */}
      </div>
    
      <Form.Group controlId="productPrice">
        <Form.Label>Precio del producto</Form.Label>
        <Form.Control type="number" placeholder="Ingresa el precio del producto" value={price} onChange={ handlePriceChange}  style={{ border: 'none', '1.5rem': '1.2rem', borderRadius: '0',  marginLeft: '20px'}}/>
      </Form.Group>


      <Button variant="primary" type="submit" onClick={handleSubmit}  Submit style={{ backgroundColor: '#511A29', border: 'none', '1.5rem': '1.2rem', borderRadius: '0', marginTop: '20px', marginLeft: '20px', fontSize: '20px', size: '20 px'}}>
        Agregar producto
      </Button>
    </Form>
  );
}
 
export default ProductForm;