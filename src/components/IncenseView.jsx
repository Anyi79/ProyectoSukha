import "../Style/ProductViewBanner.css";

function IncenseView () {
    return (
        <>
        <container id="ProductContainer">
            <div id="BannerText">
                <h1 style={{ fontSize: "5rem" }}>Inciensos</h1>
                <p id="ProductBannerP">Los inciensos se utilizan desde tiempos inmemoriales y han sido usados en muchas religiones donde se utilizaban en diversas ceremonias.

Los inciensos son una mezcla de resinas aromáticas de origen vegetal a los que se les añaden polvos de plantas, aceites esenciales, flores, cáscaras de frutos, maderas…</p>
            </div>
            <img id="BannerImg" src="src\Img\IncenseView.jpg" alt="" />
        </container>
        </>
    );
}

export default IncenseView;