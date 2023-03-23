import React from "react";
import Footer from "../components/Footer";
import CarouselFadeExample from "../components/Carousel";
import Experiences from "../components/ExperiencesLabel";
import LandingDivider from "../components/Divider";






function Landing() {

return (
<>
    <CarouselFadeExample/>
    <LandingDivider/>
    <Experiences />
    &nbsp;
    <Footer/>
</>
);



} 



export default Landing;