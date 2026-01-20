import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!username || !password) {
            setMessage("Both fields are required.");
            return;
        }

        // Get stored user
        const userData = JSON.parse(localStorage.getItem("CollabStudyUser"));
        if (!userData || userData.username !== username || userData.password !== password) {
            setMessage("Invalid username or password.");
            return;
        }

        // Successful login
        setMessage("Login successful! Redirecting...");
        setTimeout(() => {
            navigate("/dashboard");
        }, 1000); // 1 second delay for UX
    };

    return (
        <div className="login-container">
            <h1>Login</h1>
            {message && <p className="form-message">{message}</p>}
            <form onSubmit={handleSubmit}>
                <div className="field-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter your username"
                    />
                </div>
                <div className="field-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                    />
                </div>

                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    );
}

export default Login;
