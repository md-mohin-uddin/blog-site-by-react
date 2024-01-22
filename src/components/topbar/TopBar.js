/* eslint-disable max-lines */
import { Link } from 'react-router-dom';
import './topbar.css';

export default function Topbar() {
    const user = true;
    return (
        <div className="top">
            <div className="topLeft">
                <a href="https://www.facebook.com/umdmohin">
                    <i className="topIcon fab fa-facebook-square"></i>
                </a>
                <a href="https://www.linkedin.com/in/mdmohinuddin">
                    <i className=" topIcon fab fa-linkedin"></i>
                </a>
                <a href="https://www.github.com/md-mohin-uddin">
                    <i className="topIcon fab fa-github-square"></i>
                </a>
                <a href="https://www.instagram.com/md__mohin__uddin">
                    <i className="topIcon fab fa-instagram-square"></i>
                </a>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/">
                            HOME
                        </Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/about">
                            ABOUT
                        </Link>
                    </li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">
                        <Link className="link" to="/write">
                            WRITE
                        </Link>
                    </li>
                    {user && <li className="topListItem">LOGOUT</li>}
                </ul>
            </div>
            <div className="topRight">
                {user ? (
                    <Link className="link" to="/settings">
                        <img className="topImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVhtFJc9v3hEBfhJiOhYMS_60ieEbiOjPJyxl8F2dIBw&s" alt="" />
                    </Link>
                ) : (
                    <ul className="topList">
                        <li className="topListItem">
                            <Link className="link" to="/login">
                                LOGIN
                            </Link>
                        </li>
                        <li className="topListItem">
                            <Link className="link" to="/register">
                                REGISTER
                            </Link>
                        </li>
                    </ul>
                )}
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    );
}
