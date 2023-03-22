import "../Style/ProductViewBanner.css";

function Banner () {
    return (
        <>
        <container>
            <div id="BannerText">
                <h1 style={{ fontSize: "5rem" }}>Producto</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus euismod ornare est. Duis quis libero auctor, tempor erat pellentesque, posuere justo. Sed sed enim augue. Vivamus nec arcu dolor. Cras a posuere justo. Fusce et nisl eu lorem auctor congue ac non purus. Praesent ipsum mauris, sodales sit amet justo sit amet, rutrum malesuada risus. </p>
            </div>
            <div id="BannerImg"></div>
        </container>
        </>
    );
}

export default Banner;