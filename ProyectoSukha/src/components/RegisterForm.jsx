import "../Style/RegisterForm.css";

function RegisterForm () {
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
                <form id="InputContainer" action="">
                    <div id="RFSection1">
                        <div class="RegisterFormSubSection">
                            <input class="RegisterFormInput" type="text" name="Nombre" placeholder="Nombre*" />
                            <select name="UserType" class="RegisterFormInput">
                                <option value="Minorist">Minorista</option>
                                <option value="Mayorist">Mayorista</option>
                            </select>
                        </div>
                        
                        <div>
                            <input class="RegisterFormInput" type="text" name="Surname" placeholder="Apellido*" />
                            <input class="RegisterFormInput"type="text" name="id" placeholder="DNI/CIF*"/>
                        </div>
                        
                    </div>
                    <div id="RFSection1">
                        <div class="RegisterFormSubSection">
                            <input class="RegisterFormInput" type="email" name="email" placeholder="Dirección de correo electrónico*" />
                            <select name="Country" class="RegisterFormInput">
                                <option value="Minorist">España</option>
                                <option value="Mayorist">Italia</option>
                                <option value="Mayorist">Francia</option>
                                <option value="Mayorist">Reino Unido</option>
                                <option value="Mayorist">Alemania</option>
                                
                            </select>
                        </div>
                        <div > 
                            <input class="RegisterFormInput" type="email" name="email" placeholder="Confirma tu correo electrónico*"  />
                            <input class="RegisterFormInput" type="number" placeholder="Movil (opcional)" />
                        </div>
                    </div>
                    <div >
                        <div id="RFSection2">
                            <div class="RegisterFormSubSection">
                                <input class="RegisterFormInput" type="text" name="password" placeholder="Contraseña*" />
                            </div>
                            <div>
                            <input class="RegisterFormInput" type="text" name="password" placeholder="Confirma tu contraseña" />
                            </div>
                        </div>
                    </div>
                    <p id="RegisterFormP">Para más información sobre el tratamiento de tus datos personales, consulta nuestro Aviso de Privacidad.</p>
                    <div id="RFSection3">
                        <a href="">Volver al Inicio de Sesisión</a> 
                        <button id="RegisterFormBTN">
                            Registrarse
                        </button>
                    </div>
                </form>
                <p id="RegisterFormPBottom">Al registrarse confirmas que eres mayor de 16 años y que has leído y aceptas nuestros Terminos y Condiciones. Usaremos tu información para gestionar tu cuenta para fines estadísticos. </p>
            </section>
        </container>
        </>
    );
}

export default RegisterForm; 