import "../Style/ContactForm.css"

function ContactForm () {
    return (
        <>
        <container>
            <div><h1>Contacto</h1></div>
            <div className="ContactForm">
                <section>soy otra movida</section>
                <section>
                    <form action="">
                        <label htmlFor=""></label><input type="text" />
                        <label htmlFor=""></label><input type="text" />
                        <label htmlFor=""></label><input type="text" />
                        <button>Enviar</button>
                    </form>
                </section>
            </div>
        </container>
        </>
    );
}

export default ContactForm;