import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { sendRequest } from "../api/apiBooks";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { login } = useContext(AppContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            const data = await sendRequest("login", "POST", { email, password });
            login(data.token);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {error && <p className="error">{error}</p>}
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
