import { Outlet, useNavigation } from "react-router-dom";
import CandleView from "../components/CandleView";
import Experiences from "../components/ExperiencesLabel";
import IncenseView from "../components/IncenseView";
import NavScroll from "../components/Navbar";


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