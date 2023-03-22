import { Outlet, useNavigation } from "react-router-dom";
import Experiences from "../components/ExperiencesLabel";
import NavScroll from "../components/Navbar";


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