import "../Style/ProductViewBanner.css";

function OilView () {
    return (
        <>
        <container id="ProductContainer">
            <div id="BannerText">
                <h1 style={{ fontSize: "5rem" }}>Aceites</h1>
                <p id="ProductBannerP">Un aceite esencial es un extracto líquido, concentrado y complejo, que se obtiene por destilación al vapor de plantas aromáticas o de órganos de esas plantas (flor, hoja, madera, raíz, corteza, fruto, etc.). Un aceite esencial es, por lo tanto, la esencia destilada de la planta aromática. Se compone de un centenar de moléculas terpénicas y aromáticas especialmente activas y originales para la salud diaria.</p>
            </div>
            <img id="BannerImg" src="src\Img\OilView.jpg" alt="" />
        </container>
        </>
    );
}

export default OilView;