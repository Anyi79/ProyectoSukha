import { Outlet, useNavigation } from "react-router-dom";
import NavScroll from "../components/Navbar";
import Banner from "../components/ProductViewBanner";


function Root() {
    const navigation = useNavigation()
    return (
        <>
            <NavScroll />
            <Banner />
            <Outlet />
            
          
        </>
    );
}

export default Root;