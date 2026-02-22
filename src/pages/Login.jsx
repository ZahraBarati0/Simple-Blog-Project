import { useLocation, useNavigate } from "react-router-dom";

function Login({onLogin}){
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/dashboard";
    function handleLogin(){
        onLogin();
        navigate(from, {replace: true});
    }

    return (
        <div>
            <h1>Login</h1>
            <p className="text-secondary">
                Click here to simulate autentication.
            </p>

            <button className="btn btn-primary" onClick={handleLogin}>
                Login
            </button>
        </div>
    )
}

export default Login;