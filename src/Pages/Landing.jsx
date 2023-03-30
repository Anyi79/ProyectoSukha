import React from "react";
import Footer from "../components/Footer";
import CarouselFadeExample from "../components/Carousel";
import Experiences from "../components/ExperiencesLabel";
import LandingDivider from "../components/Divider";
import ProductScroll from "../components/ProductScroll";
import { useLoaderData } from "react-router-dom";



function Landing() {
    const { products } = useLoaderData();
    

return (
<>
    <CarouselFadeExample/>
    <LandingDivider/>
    <Experiences />
    <ProductScroll products={products}/>
    &nbsp;
    <Footer/>
</>
);



} 



export default Landing;