import React, { useEffect } from "react";
import "./Recommended.css";
import thumbnail1 from "../../assets/thumbnail1.png";
import thumbnail2 from "../../assets/thumbnail2.png";
import thumbnail3 from "../../assets/thumbnail3.png";
import thumbnail4 from "../../assets/thumbnail4.png";
import thumbnail5 from "../../assets/thumbnail5.png";
import thumbnail6 from "../../assets/thumbnail6.png";
import thumbnail7 from "../../assets/thumbnail7.png";
import thumbnail8 from "../../assets/thumbnail8.png";
import { useState } from "react";
import { API_KEY, valueConverter } from "../../data";
import { Link } from "react-router-dom";
function Recommended({categoryId}){
	const [apiData, setApiData] = useState([])
	const fetchVideoData = async () => {
		const videoData = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
		const res = await fetch(videoData);
		const data = await res.json();
		setApiData(data.items);
	}
	useEffect(() => {
		fetchVideoData();
	},[])
	return(
		<div className="recommended">
			{apiData.map((item,i)=>{
				return(
						<Link to={`/video/${item.snippet.categoryId}/${item.id}`}className="side-video-list" key={i}>
							<img src={item.snippet.thumbnails.medium.url} alt="" />
							<div className="info">
								<h4>{item.snippet.title}</h4>
								<p>{item.snippet.channelTitle}</p>
								<p>{valueConverter(item.statistics.viewCount)}Views</p>
							</div>
					</Link>
				)
			})}
			
		</div>
	)
}

export default Recommended