import { useForm } from 'react-hook-form';
import React, { useState, useRef } from 'react';
import Alert from 'react-bootstrap/Alert';
import UserHandlerAPI from '../handlers/userHandlerAPI';
import CustomerHandlerAPI from '../handlers/customerHandlerAPI';
import PersonHandlerAPI from '../handlers/personHandlerAPI';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import "../Style/RegisterForm.css";

function RegisterForm () {
    const { register, handleSubmit, formState: { errors }, setValue, getValues, reset } = useForm();

    const [showAlert, setShowAlert] = useState(false);
    const formRef = useRef(null);

    const handleAddClick = () => {
        setShowAlert(true);
      };
    
      const handleAlertClose = () => {
        setShowAlert(false);
        reset();
      };
    
      const onSubmit = async (data) => {
        const person = await PersonHandlerAPI.addPerson(data);
        
        const user = { ...data, idPerson: person.id };
        await UserHandlerAPI.addUser(user);

        const customer = { ...data, idPerson: person.id };
        await CustomerHandlerAPI.addCustomer(customer);
        console.log(data);
        console.log(user);
        console.log(customer);
        setShowAlert(true);
        formRef.current.reset();
      };
    
      const [alertVariant, setAlertVariant] = useState("success");
      const [alertMessage, setAlertMessage] = useState("");


    return (
        <>
        <container> 
            <section>
                <div id="RegisterFormTitleLabel">
                    <h1 id="RegisterFormText">
                    Registro
                    </h1>
                </div>
            </section>
            <section id="RegisterFormContainer">
                <p id="RegisterFormP1">*Obligatorios</p>
                <form id="InputContainer" action="" ref={formRef} onSubmit={handleSubmit(onSubmit)}>
                    <div id="RFSection1">
                        <div class="RegisterFormSubSection">
                            <input class="RegisterFormInput" type="text" id="name" name="Name" placeholder="Nombre*" {...register("name", { required: true })} />
                            {errors.name && <span>Debe rellenar este campo</span>}
                            <input class="RegisterFormInput" type="text" id="surname" name="Surname" placeholder="Apellido*" {...register("surname", { required: true })} />
                            {errors.surname && <span>Debe rellenar este campo</span>}
                        </div>
                        
                        <div>
                        <select id="userType" name="userType" class="RegisterFormInput" placeholder="Indícanos Minorista/Mayorista" {...register("UserType")} >
                                <option value="selecciona">selecciona...</option>
                                <option value="Minorista">Particular</option>
                                <option value="Minorista">Minorista</option>
                                <option value="Mayorista">Mayorista</option>
                            </select>
                            <input class="RegisterFormInput" type="text" name="id" id="dni" placeholder="DNI/CIF*" {...register("dni", { required: true })} />
                            {errors.name && <span>Debe rellenar este campo</span>}
                        </div>
                        
                    </div>

                    <div id="RFSection1">
                        <div class="RegisterFormSubSection">
                            <input class="RegisterFormInput"  id="email" type="email" name="email" placeholder="Dirección de correo electrónico*" {...register("email", { required: true })} />
                            {errors.name && <span>Debe rellenar este campo</span>}
                            <input class="RegisterFormInput" type="email" name="email" placeholder="Confirma tu correo electrónico*"  />
                        </div>
                        <div > 
                            <input class="RegisterFormInput" id="phone" type="number" placeholder="Movil (opcional)" {...register("phone")} />
                            <select name="Country" id="country" class="RegisterFormInput" {...register("country")} >
                                <option value="selecciona">selecciona...</option>
                                <option value="España">España</option>
                                <option value="Italia">Italia</option>
                                <option value="Francia">Francia</option>
                                <option value="Reino Unido">Reino Unido</option>
                                <option value="Alemania">Alemania</option>
                                
                            </select>
                        </div>
                    </div>
                    <div >
                        <div id="RFSection2">
                            <div class="RegisterFormSubSection">
                                <input class="RegisterFormInput" type="text" name="password" id="password" placeholder="Contraseña*" {...register("password", { required: true })} />
                                {errors.name && <span>Debe rellenar este campo</span>}
                            </div>
                            <div>
                            <input class="RegisterFormInput" type="text" name="password" placeholder="Confirma tu contraseña" />
                            </div>
                        </div>
                        <div id="RFSection2">
                            <div class="RegisterFormSubSection">
                                <input class="RegisterFormInput" type="text" id="company" name="company" placeholder="Empresa" {...register("company")} />
                            </div>
                            <div>
                            <input class="RegisterFormInput" type="text" name="sector" id="sector" placeholder="Sector" {...register("sector")} />
                            </div>
                        </div>
                    </div>
                    <p id="RegisterFormP">Para más información sobre el tratamiento de tus datos personales, consulta nuestro Aviso de Privacidad.</p>
                    <div id="RFSection3">
                        <a href="" style={{color:"white"}}>Volver al Inicio de Sesisión</a> 
                        <button id="RegisterFormBTN" onClick={handleAddClick}>
                            Registrarse
                        </button>
                    </div>
                </form>
                <Alert show={showAlert} variant={alertVariant} onClose={handleAlertClose} dismissible>
                    <Alert.Heading style={{ color: 'white', textAlign: 'center' }}>{alertVariant === 'success' ? 'Se ha registrado correctamente' : 'Error'}</Alert.Heading>
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
                <p id="RegisterFormP">Al registrarse confirmas que eres mayor de 16 años y que has leído y aceptas nuestros Terminos y Condiciones. Usaremos tu información para gestionar tu cuenta para fines estadísticos. </p>
            </section>
        </container>
        </>
    );
}

export default RegisterForm; 