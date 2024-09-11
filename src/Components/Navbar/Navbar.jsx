import React from "react";
import "./Navbar.css";
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search.png'
import upload_icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notification_icon from '../../assets/notification.png'
import profile_user from '../../assets/profile_user.jpg'
function Navbar	({sidebar,setSidebar}) {
	return (
		<nav className="flex-div">
			<div className="nav-left flex-div">
				<img className="menu-icon" onClick={()=>setSidebar(!sidebar)} src={menu_icon} alt="" />
				<img className="logo" src={logo} alt="" />
			</div>
			<div className="nav-middle flex-div">
				<div className="search-box flex-div">
					<input type="text" placeholder="Search" />
					<img src={search_icon} alt="" />
				</div>
			</div>
			<div className="nav-rigth flex-div">
				<img src={upload_icon} alt="" />
				<img src={more_icon} alt="" />
				<img src={notification_icon} alt="" />
				<img src={profile_user} className="user-icon" alt="" />
			</div>
		</nav>
	)
}
export default Navbar