import React from "react";
import "./Home.css";
import SideBar from "../../Components/Sidebar/Sidebar";
function Home({sidebar,setSidebar}) {
	return(
		<>
		<SideBar sidebar={sidebar} setSidebar={setSidebar}/>
		</>
	)
}

export default Home;