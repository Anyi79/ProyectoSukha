import "../Style/ProductViewBanner.css";

function SahumerioView () {
    return (
        <>
        <container id="ProductContainer">
            <div id="BannerText">
                <h1 style={{ fontSize: "5rem" }}>Sahumerios</h1>
                <p id="ProductBannerP">Un sahumerio puede ser un incienso o bien algún elemento de la naturaleza, como madera, plantas, flores... lo que sea, pero es aconsejable que desprenda un buen aroma para que nos ayude a relajarnos y a mejorar las vibras del lugar que nos interese, como nuestra casa o nuestro lugar de trabajo. Tiene un tradición muy antigua, ya que según los datos que tenemos en la actualidad, en el antiguo Egipto, en Babilonia y en Grecia ya se recurría a los sumerios para alejar los malos espíritus o cualquier otra energía negativa que flotase a nuestro alrededor.</p>
            </div>
            <img id="BannerImg" src="src\Img\sahumerio view.jpg" alt="" />
        </container>
        </>
    );
}

export default SahumerioView;