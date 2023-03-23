import { Outlet, useNavigation } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import NavScroll from "../components/Navbar";


function Root() {
    const navigation = useNavigation()
    return (
        <>
            <NavScroll />
            <ContactForm />
            <Outlet />
            
          
        </>
    );
}

export default Root;