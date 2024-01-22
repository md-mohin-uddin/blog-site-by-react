import { useState } from 'react';
import './login.css';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    };
    const handleSubmit = (e) => {
        let userInfo = {
            email,
            password
        };
        console.log(userInfo);
        e.preventDefault();
    };
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={handleSubmit}>
                <label>Email</label>
                <input onChange={handleChangeEmail} value={email} className="loginInput" type="text" placeholder="Enter your email..." />
                <label>Password</label>
                <input onChange={handleChangePassword} value={password} className="loginInput" type="password" placeholder="Enter your password..." />
                <button className="loginButton">Login</button>
            </form>
            <button className="loginRegisterButton">Register</button>
        </div>
    );
}
