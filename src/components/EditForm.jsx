import React, { useState, useEffect, useRef } from 'react';
import ProductHandlerAPI from '../handlers/productHandlerAPI';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../Style/EditProduct.css';


export default function EditForm() {
  const {id} = useParams();
    const [product, setProduct] = useState({});

  useEffect(() => {
    async function fetchProduct() {
      const productData = await ProductHandlerAPI.loadProduct(id);
      setProduct(productData);
    }
    fetchProduct();
  }, [id]);

    const [name, setName] = useState(product.name  || '');
    const [price, setPrice] = useState(product.price|| '');
    const [description, setDescription] = useState(product.description || '');
    const [brand, setBrand] = useState(product.brand || '');
    const [category, setCategory] = useState(product.category || '');
    const [stock, setStock] = useState(product.stock|| '');
    const [isActive, setIsActive] = useState(product.isActive || '');
    const [fileExtension, setFileExtension] = useState(product.fileExtension || '');
    const [content, setContent] = useState(product.content || '');

  useEffect(() => {
    
    if (name === '') {
      setName(product.name || '');
    }
    if (price === '') {
      setPrice(product.price || '');
    }
    if (description === '') {
      setDescription(product.description || '');
    }
    if (brand === '') {
      setBrand(product.brand || '');
    }
    if (category === '') {
      setCategory(product.category || '');
    }
    if (stock === '') {
      setStock(product.stock || '');
    }
    if (isActive === '') {
      setIsActive(product.isActive || '');
    }
    if (fileExtension === '') {
      setFileExtension(product.fileextension || '');
    }
    if (content === '') {
      setContent(product.content || '');
    }

  }, [product.id, product.name, product.price, product.brand, product.category, product.stock, product.isActive, product.fileExtension, product.content, product.description]);

    const handleImageChange = (event) => {
      const picture = event.target.files[0];
      const extension = image.name.split('.').pop();
      const reader = new FileReader();
      reader.readAsDataURL(picture);
      console.log(picture)
      reader.onload = () => {
        const base64String = reader.result.split(",")[1]; // Obtener la cadena base64 sin la cabecera
        console.log("ësto es el readeeeeeeeer", base64String);
        setContent(base64String);
        setFileExtension(extension);
        };console.log(picture)
      };
    
 

    const handleNameChange = (event) => {
        let nameInput = event.target.value;
        setName(nameInput);
    };
    const handleDescriptionChange = (event) => {
        let descriptionInput = event.target.value;
        setDescription(descriptionInput);
    };

    const handlePriceChange = (event) => {
        let priceInput = event.target.value;
        setPrice(priceInput);
    };

    const handleBrandChange = (event) => {
      let brandInput = event.target.value;
      setBrand(brandInput);
  };

const handleIsActiveChange = (event) => {
    let isActiveInput = event.target.value;
    setIsActive(isActiveInput);
};

const handleStockChange = (event) => {
    let stockInput = event.target.value;
    setStock(stockInput);
};

const handleCategoryChange = (event) => {
  let categoryInput = event.target.value;
  setCategory(categoryInput);
};
    
  const handleSubmit = async (event) => {
    event.preventDefault();

  const id = product.id;

  const updatedProduct = {
    ...product,
    name,
    price,
    brand,
    category,
    stock,
    description,
    content,
    fileExtension,
    isActive,
  };

  await ProductHandlerAPI.updateProduct(id, updatedProduct);

  history.push(`/product/${id}`);
    };
  


  return (
    <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" >
      <div className='centerText' style={{marginLeft: '5vw'}}><Form.Label>Upload Image:</Form.Label></div>
      <Form.Control
        id="picture"
        type="file"
        style={{width:'75vw', marginLeft: '5vw'}}
        onChange={handleImageChange} />

      <div className="input-container" style={{width:'80vw', height:'100px'}}>
      
      <Form.Group controlId="name" style={{marginLeft: '5vw'}}>
        <Form.Label>Producto</Form.Label>
        <Form.Control type="text" placeholder="Ingresa el nombre del producto" value={name} onChange={handleNameChange}  style={{ border: 'none', '1.5rem': '1.2rem'}}/>
      </Form.Group>

      <Form.Group controlId="category" style={{marginLeft: '5vw'}}>
        <Form.Label>Categoría del producto</Form.Label>
        <Form.Control type="text" rows={1} placeholder="Ingresa la categoría del producto" value={category} onChange={handleCategoryChange} style={{ border: 'none', '1.5rem': '1.2rem'}}/>
      </Form.Group>

      <Form.Group controlId="brand" style={{marginLeft: '5vw'}}>
        <Form.Label style={{color:'#511A29'}}>Marca del producto</Form.Label>
        <Form.Control type="text" rows={1} placeholder="Ingresa la marca del producto" value={brand} onChange={handleBrandChange} style={{ border: 'none', '1.5rem': '1.2rem'}}/>
      </Form.Group>

      <Form.Group controlId="price" style={{marginLeft: '5vw'}}>
        <Form.Label>Precio del producto</Form.Label>
        <Form.Control type="number" placeholder="Ingresa el precio del producto" value={price} onChange={ handlePriceChange}  style={{ border: 'none', '1.5rem': '1.2rem'}}/>
      </Form.Group>

      <Form.Group controlId="stock" style={{marginLeft: '5vw'}}>
        <Form.Label>Stock del producto</Form.Label>
        <Form.Control type="number" placeholder="Ingresa el stock del producto" value={stock} onChange={ handleStockChange}  style={{ border: 'none', '1.5rem': '1.2rem'}}/>
      </Form.Group>

      <Form.Group controlId="active" style={{marginLeft: '5vw'}}>
        <Form.Label>¿Desea activar o desactivar el producto?</Form.Label>
        <Form.Select type="text" placeholder="Ingresa el stock del producto" onChange={ handleIsActiveChange}  style={{ border: 'none', '1.5rem': '1.2rem'}}/>
        <Form.option value="selecciona">selecciona...</Form.option>
        <Form.option value="true">Activar</Form.option>
        <Form.option value="false">Desactivar</Form.option>
      </Form.Group>
     
      </div>
      <div>
      <Form.Group controlId="description" style={{marginTop:'18vh', marginLeft: '5vw'}}>
        <Form.Label>Descripción del producto</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Ingresa la descripción del producto" value={description} onChange={handleDescriptionChange} style={{width:'75vw'}}/>
      </Form.Group>
      </div>


      <Button variant="primary" type="submit" Submit style={{ backgroundColor: '#511A29', border: 'none', '1.5rem': '1.2rem', borderRadius: '0', marginTop: '20px', marginLeft: '20px', fontSize: '20px', size: '20 px'}}>
        Editar
      </Button>

    </Form.Group>
    </Form>
  );
}
