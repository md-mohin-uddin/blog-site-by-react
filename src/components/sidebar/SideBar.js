/* eslint-disable max-lines */
import './sidebar.css';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="https://themes-themegoods.b-cdn.net/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg" alt="" />
                <p>Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit amet ex esse.Sunt eu ut nostrud id quis proident.</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cinema</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
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
            </div>
        </div>
    );
}
