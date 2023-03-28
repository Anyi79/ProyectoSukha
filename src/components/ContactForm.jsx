//import "../Style/ContactForm.css"
import { BsEnvelope, BsTelephone, BsInstagram, BsWhatsapp, BsFacebook, BsTwitter} from "react-icons/bs";



function ContactForm () {
    return (
        <>
        <container id="ContactFormContainer">
            <div><h1 id="ContactFormTitle">Contacto</h1></div>
            <div className="ContactForm">
                <section id="InfoContactForm">
                    <div>
                        <p className="ContactFormText"><BsEnvelope size={30}/>  consultas@suhka.com</p>
                    <div>
                    </div>
                        <p className="ContactFormText"><BsTelephone size={30}/>  635 846 598</p>
                        </div>
                    &nbsp; 
                    <div id="ContactInfoContainer">
                        <p className="ContactFormText">Disponible en horario comercial </p><p className="ContactFormText">Lun-vie 10:00-18:00</p><p className="ContactFormText">Sab 10:00-14:00</p>
                    </div>
                    <div id="ContactFormIconContainer">
                        <button className="ContactFormIconBtn"><BsInstagram size={50}/></button> <button className="ContactFormIconBtn"><BsWhatsapp size={50}/></button> <button className="ContactFormIconBtn"><BsFacebook size={50}/></button> <button className="ContactFormIconBtn"><BsTwitter size={50}/></button>

                    </div>
                    
                    
                    </section>
                <section >
                    <form id="ContactFormInnerContainer" action="https://formsubmit.co/projectsukhaecommerce@gmail.com" method="POST">
                        <label htmlFor=""></label><input id="InputEmail" name="email" type="text" placeholder="Email" />
                        &nbsp;
                        <label htmlFor=""></label><input id="InputSubject" name="subjet" type="text" placeholder="Asunto"/>
                        &nbsp;
                        <label htmlFor=""></label><input id="InputMessage" name="comments" type="text" placeholder="Mensaje"/>
                        &nbsp;
                        <button id="ContactFormSendBtn">Enviar</button>

                        <input type="hidden" name="_next" value="http://localhost:5173/" />
                        <input type="hidden" name="_captcha" value="false" />
                    </form>
                </section>
            </div>
        </container>
        </>
    );
}

export default ContactForm;