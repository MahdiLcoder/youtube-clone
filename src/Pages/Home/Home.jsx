import React from "react";
import "./Home.css";
import SideBar from "../../Components/Sidebar/Sidebar";
import Feed from "../../Components/Feed/Feed";
function Home({sidebar,setSidebar}) {
	return(
		<>
		<SideBar sidebar={sidebar} setSidebar={setSidebar}/>
		<div className={`container ${sidebar ? "" : "large-container"}`}>
			<Feed/>
		</div>
		</>
	)
}

export default Home;