import { useState } from 'react';
import { productsHandler } from '../handlers/productHandler';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLoaderData } from 'react-router-dom';
import '../Style/EditProduct.css';


function EditProduct() {
  const { product } = useLoaderData();
console.log(product)
const id = product.id;

/* const [previewImage, setPreviewImage] = useState(null); */
  const [name, setName] = useState(product.name);
/* const [category, setCategory] = useState('product.category');  */
  const [price, setPrice] = useState(product.price);
  const [brand, setBrand] = useState(product.brand);
/* const [description, setDescription] = useState('product.description'); */
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
    let nameInput = event.target.value;
    setName(nameInput);
};

/*   const handleCategoryChange = (event) => {
    let categoryInput = event.target.value;
    setCategory(categoryInput);
  }; */

  const handlePriceChange = (event) => {
    let priceInput = event.target.value;
    setPrice(priceInput);
  };

  const handleBrandChange = (event) => {
    setBrand(event.target.value);
  };
/*   const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  }; */

/*   const handleStockChange = (event) => {
    setStock(event.target.value);
  }; */

  const handleSubmit = (event) => {
    event.preventDefault();
    let updateProduct = {id,name,price, brand};

    productsHandler.updateProduct(updateProduct);
  };


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
      <Form.Group >
        <Form.Label>Producto</Form.Label>
        <Form.Control type="text" placeholder= {product.name}  onChange={handleNameChange} style={{ border: 'none', '1.5rem': '1.2rem', borderRadius: '0', marginLeft: '20px'}}  />
      </Form.Group>


{/* 
      <Form.Group >
        <Form.Label>Categoría del producto</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Ingresa la categoría del producto"  onChange={handleCategoryChange} />
      </Form.Group> */}
      <Form.Group >
        <Form.Label >Marca del producto</Form.Label>
        <Form.Control placeholder= {product.brand}  onChange={handleBrandChange} style={{ border: 'none', '1.5rem': '1.2rem', borderRadius: '0',  marginLeft: '20px'}} />
      </Form.Group>

      {/* <Form.Group >
        <Form.Label>Descripción del producto</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Ingresa la descripción del producto"  onChange={handleDescriptionChange} />
      </Form.Group>
 */}
    </div>
      <Form.Group style={{width:'460px'}}>
        <Form.Label>Precio del producto</Form.Label>
        <Form.Control type="number" placeholder={product.price} onChange={ handlePriceChange} style={{ border: 'none', '1.5rem': '1.2rem', borderRadius: '0',  marginLeft: '20px'}} />
      </Form.Group>


      <Button variant="primary" type="submit" Submit style={{ backgroundColor: '#511A29', border: 'none', '1.5rem': '1.2rem', borderRadius: '0', marginTop: '20px', marginLeft: '20px', fontSize: '20px', size: '20 px'}}>
        Editar
      </Button>
    </Form>
  );
}
 
export default EditProduct;