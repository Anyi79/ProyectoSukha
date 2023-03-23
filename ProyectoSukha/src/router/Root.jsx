import { Outlet, useNavigation } from "react-router-dom";
import Experiences from "../components/ExperiencesLabel";
import NavScroll from "../components/Navbar";
import LandingDivider from "../components/Divider";


function Root() {
    const navigation = useNavigation()
    return (
        <>
            <NavScroll />
            <Experiences />
            <Outlet />
            
          
        </>
    );
}

export default Root;