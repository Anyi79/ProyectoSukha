import { Outlet, useNavigation } from "react-router-dom";
import NavScroll from "../components/Navbar";
import LandingDivider from "../components/Divider";


function Root() {
    const navigation = useNavigation()
    return (
        <>
        <NavScroll />
        <LandingDivider />
        <Outlet />
            
          
        </>
    );
}

export default Root;