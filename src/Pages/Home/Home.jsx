import React from "react";
import "./Home.css";
import SideBar from "../../Components/Sidebar/Sidebar";
function Home({sidebar}){
	return(
		<>
		<SideBar sidebar={sidebar} />
		</>
	)
}

export default Home;