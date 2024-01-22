import { useState } from 'react';
import './register.css';

export default function Register() {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeUserName = (e) => {
        setUserName(e.target.value);
    };
    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    };
    const handleSubmit = (e) => {
        let userInfo = {
            userName,
            email,
            password
        };
        console.log(userInfo);
        e.preventDefault();
    };
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form onSubmit={handleSubmit} className="registerForm">
                <label>Username</label>
                <input onChange={handleChangeUserName} value={userName} className="registerInput" type="text" placeholder="Enter your username..." />
                <label>Email</label>
                <input onChange={handleChangeEmail} value={email} className="registerInput" type="text" placeholder="Enter your email..." />
                <label>Password</label>
                <input onChange={handleChangePassword} value={password} className="registerInput" type="password" placeholder="Enter your password..." />
                <button className="registerButton">Register</button>
            </form>
            <button className="registerLoginButton">Login</button>
        </div>
    );
}
