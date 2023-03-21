import { Outlet, useNavigation } from "react-router-dom";
import NavScroll from "../components/Navbar";
import Footer from "../components/Footer";


function Root() {
    const navigation = useNavigation()
    return (
        <>
            <NavScroll />
            <Footer/>
          
        </>
    );
}

export default Root;