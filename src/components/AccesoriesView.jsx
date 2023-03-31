import "../Style/ProductViewBanner.css";

function AccesoriesView () {
    return (
        <>
        <container id="ProductContainer">
            <div id="BannerText">
                <h1 style={{ fontSize: "5rem" }}>Accesorios</h1>
                <p id="ProductBannerP"> Más allá de las herramientas y materiales básicos para acompañar tus meditaciones y sesiones terapéuticas, Sukha pone a tu disposición un catálogo de accesorios de primeras calidades. Cuencos tibetanos, esterillas de yoga, inciensarios, etc...</p>
            </div>
            <img id="BannerImg" src="src\Img\AccesoriesView.jpg" alt="" />
        </container>
        </>
    );
}

export default AccesoriesView ;