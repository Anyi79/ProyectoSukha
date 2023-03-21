import { Outlet, useNavigation } from "react-router-dom";
import NavScroll from "../components/Navbar";
import Footer from "../components/Footer";
import CarouselFadeExample from "../components/Carousel";


function Root() {
    const navigation = useNavigation()
    return (
        <>
            <NavScroll />
            <CarouselFadeExample/>
            <Footer/>
          
        </>
    );
}

export default Root;