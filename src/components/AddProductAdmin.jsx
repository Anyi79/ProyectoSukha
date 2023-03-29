import { useForm } from 'react-hook-form';
import React, { useState, useRef } from 'react';
import Alert from 'react-bootstrap/Alert';
import ProductHandlerAPI from '../handlers/productHandlerAPI';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import '../../src/index.css';
import '../Style/Form.css';

function AddProductAdmin() {

  const { register, handleSubmit, formState: { errors }, setValue, getValues, reset } = useForm();

  const [showAlert, setShowAlert] = useState(false);
  const formRef = useRef(null);

 const handleImageChange = (event) => {
  const picture = event.target.files[0];
  const extension = picture.name.split('.').pop();
  const reader = new FileReader();
  reader.readAsDataURL(picture);  
  reader.onload = () => {
    const base64String = reader.result.split(",")[1];
    console.log(base64String);
    setValue("picture", base64String);
    setValue ("extension", extension);
    console.log(extension);
    };console.log(picture);
    
  };


  const handleAddClick = () => {
    setShowAlert(true);
  };

  const handleAlertClose = () => {
    setShowAlert(false);
    reset();
  };

  const onSubmit = async (data) => {
    await ProductHandlerAPI.addProduct(data);
    console.log(data);
    setShowAlert(true);
    formRef.current.reset();
  };

  const [alertVariant, setAlertVariant] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  return (
    <div id='container'>
      <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="form">
        <fieldset id="form">
        <div>
          <label className='name' htmlFor="name">Nombre del producto</label>
          <input id="name" {...register("name", { required: true })} />
          {errors.name && <span>Debe rellenar este campo</span>}
        </div>

        <div>
          <label className='category' htmlFor="category">Categoría del producto</label>
          <input id="category" {...register("category", { required: true })} />
          {errors.category && <span>Debe rellenar este campo</span>}
        </div>

        <div>
          <label className='brand' htmlFor="brand">Marca del producto</label>
          <input id="brand" {...register("brand", { required: true })} />
          {errors.brand && <span>Debe rellenar este campo</span>}
        </div>

        <div>
          <label htmlFor="description">Descripción del producto</label>
          <input id="description" rows="6" cols="35" {...register("description", { required: true })} />
          {errors.description && <span>Debe rellenar este campo</span>}
        </div>

        <div>
          <label htmlFor="price">Precio del producto</label>
          <input id="price" {...register("price", { required: true })} />
          {errors.price && <span>Debe rellenar este campo</span>}
        </div>

        <div>
          <label htmlFor="stock">Stock del producto</label>
          <input id="stock" type='number' min="0" {...register("stock", { required: true })} />
          {errors.units && <span>Debe rellenar este campo</span>}
        </div>
        <div>
          <fieldset>
            <input id="img" placeholder='Foto del producto' type="file" onChange={handleImageChange} />
            {errors.img && <span>Debe rellenar este campo</span>}
          </fieldset>
        </div>
        </fieldset>

        <div id="buttons" style={{display:'flex', flexDirection: 'row'}}>
          <input onClick={handleAddClick} id="submit" type="submit" value="GUARDAR" />
          <Link to="/" style={{textDecoration:'none'}}><input id="return" type="button" value="VOLVER" /></Link>
        </div>
      <Alert show={showAlert} variant={alertVariant} onClose={handleAlertClose} dismissible>
        <Alert.Heading style={{ color: 'white', textAlign: 'center' }}>{alertVariant === 'success' ? 'Foto añadida a la base de datos' : 'Error'}</Alert.Heading>
        <p style={{ color: 'white' }}>
          {alertMessage}
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button style={{ height: '4vh', fontFamily: 'Jmh', width: '5vw' }} onClick={handleAlertClose} variant="outline-success">
            Cerrar
          </Button>
        </div>
      </Alert>
    </form>
    </div>
  )
}


export default AddProductAdmin