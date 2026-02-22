import { NavLink } from "react-router-dom";

const linkClass = ({ isActive }) =>
    "nav-link px-2" +
    (isActive
        ? " fw-semibold text-info border-bottom border-info"
        : " text-light");

export default function Navbar({ isAuth }) {
    return (
        <nav
            className="navbar border-bottom"
            style={{
                backgroundColor: "#1e293b",
                borderColor: "#334155"
            }}
        >
        <div className="container d-flex align-items-center">
            <span className="navbar-brand fw-bold text-light">
                Simple Blog
            </span>

            <div className="d-flex gap-4 mx-auto">
                <NavLink className={linkClass} to="/">Home</NavLink>
                <NavLink className={linkClass} to="/blog">Blog</NavLink>
                <NavLink className={linkClass} to="/dashboard">Dashboard</NavLink>
                <NavLink className={linkClass} to="/login">Login</NavLink>
            </div>
            <span className={`badge ${isAuth ? "bg-success" : "bg-secondary"}`}>
                {isAuth ? "Logged In" : "Logged Out"}
            </span>
        </div>
        </nav>
    );
}