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
                <p>*Obligatorios</p>
                <form id="InputContainer" action="">
                    <div >
                        <div>
                            <input class="RegisterFormInput" type="text" />
                            <input class="RegisterFormInput" type="text" />
                        </div>
                        <div>
                            <input class="RegisterFormInput" type="text" />
                            <input class="RegisterFormInput"type="text" />
                        </div>
                        
                    </div>
                    <div>
                        <div>
                            <input class="RegisterFormInput" type="text" />
                            <input class="RegisterFormInput" type="text" />
                        </div>
                        <div>
                            <input class="RegisterFormInput" type="text" />
                            <input class="RegisterFormInput" type="text" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <input class="RegisterFormInput" type="text" />
                            <input class="RegisterFormInput" type="text" />
                        </div>
                    </div>
                    <p>Para más información sobre el tratamiento de tus datos personales, consulta nuestro Aviso de Privacidad.</p>
                    <div>
                        <a href="">Volver al Inicio de Sesisión</a>
                        <button>
                            Registrarse
                        </button>
                    </div>
                </form>
                <p>Al registrarse confirmas que eres mayor de 16 años y que has leído y aceptas nuestros Terminos y Condiciones. Usaremos tu información para gestionar tu cuenta para fines estadísticos. </p>
            </section>
        </container>
        </>
    );
}

export default RegisterForm; 