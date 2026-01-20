import './Signup.css';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom'; 

const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!username || !email || !password || !confirmPassword) {
            setMessage("All fields are required.");
            return;
        }

        if (!email.endsWith("@aau.edu.et")) {
            setMessage("Email must be an aau.edu.et address.");
            return;
        }

        if (password !== confirmPassword) {
            setMessage("Passwords do not match.");
            return;
        }

        // ✅ Save user to localStorage
        const userData = { username, email, password };
        localStorage.setItem("CollabStudyUser", JSON.stringify(userData));

        setMessage("Signup successful! Redirecting to login...");
        setTimeout(() => {
            navigate('/login');
        }, 1000);
    };

    return (
        <div style={{ maxWidth: "400px", margin: "40px auto"}}>
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    placeholder="AAU Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />  
                <button type="submit">Create Account</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default Signup;
