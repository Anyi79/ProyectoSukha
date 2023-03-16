import { Outlet, useNavigation } from "react-router-dom";
import NavScroll from "../components/Navbar";


function Root() {
    const navigation = useNavigation()
    return (
        <>
            <NavScroll />
            <main className="container">
                {navigation.state === "loading" && (
                    <div className="alert alert-info my-S">Loading...</div>
                )}
                <Outlet />
            </main>
          
        </>
    );
}

export default Root;