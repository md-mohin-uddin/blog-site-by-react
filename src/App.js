import React from 'react';
import Home from './pages/home/Home';
import Settings from './pages/settings/Settings';
import TopBar from './components/topbar/TopBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Write from './pages/write/Write';
import Single from './pages/single/Single';

const App = () => {
    const currentUser = true;
    return (
        <div>
            <BrowserRouter>
                <TopBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/posts" element={<Home />} />
                    <Route path="/register" element={currentUser ? <Home /> : <Register />} />
                    <Route path="/login" element={currentUser ? <Home /> : <Login />} />
                    <Route path="/post/:id" element={<Single />} />
                    <Route path="/write" element={currentUser ? <Write /> : <Login />} />
                    <Route path="/settings" element={currentUser ? <Settings /> : <Login />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
