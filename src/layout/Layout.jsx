import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function Layout( { isAuth } ){
    return (
        <div className="container py-5" style={{ maxWidth: "900px" }}>
            <Navbar isAuth={isAuth}/>
            <div className="container py-4">
                <Outlet />

                <footer className="text-center mt-5 text-secondary small">
                    © {new Date().getFullYear()} Simple Blog — Built with React Router
                </footer>

            </div>
        </div>
    )
}

export default Layout;