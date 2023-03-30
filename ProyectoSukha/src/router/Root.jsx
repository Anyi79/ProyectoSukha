import { Outlet, useNavigation } from "react-router-dom";
import Experiences from "../components/ExperiencesLabel";
import NavScroll from "../components/Navbar";
import LandingDivider from "../components/Divider";
import RegisterForm from "../components/RegisterForm";


function Root() {
    const navigation = useNavigation()
    return (
        <>
            <NavScroll />
            <Outlet />
            
          
        </>
    );
}

export default Root;