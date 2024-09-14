import React, { useEffect, useState } from "react";
import "./PlayVideo.css";
import { Link } from "react-router-dom";
import video1 from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";
import { API_KEY } from "../../data";
import moment from "moment";
import { valueConverter } from "../../data";
function PlayVideo({videoId}) {
	const [apiData, setApiData] = useState(null)
	const [channelData, setChannelData] = useState(null)
	const [commentData, setCommentData] = useState(null)
	const fetchVideoData = async () => {
		const videoDetailsUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=${API_KEY}`;
		const res = await fetch(videoDetailsUrl);
		const data = await res.json();
		setApiData(data.items[0]);
	}
	const fetchChannelData = async () => {
    const channelDetailsUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData?.snippet?.channelId}&key=${API_KEY}`;

    const res = await fetch(channelDetailsUrl);
    const data = await res.json();
		setChannelData(data.items[0]);
	}
	const fetchCommentData = async ()=>{
		const commentUrl = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`;
		const res = await fetch(commentUrl);
		const data = await res.json();
		setCommentData(data.items);
	}
	useEffect(() => {
    fetchVideoData();
  }, [videoId])
	useEffect(() => {
    fetchChannelData();
  }, [apiData])
	useEffect(() => {
    fetchCommentData();
  }, [apiData])
	return(
		<div className="play-video">
			{/* <video src={video1} controls autoPlay muted></video> */}
			<iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} 
							title="" 
							frameBorder="0" 
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" 
							allowFullScreen></iframe>
			<h3>{apiData?.snippet?.title}</h3>
			<div className="play-video-info">
				<p>{valueConverter(apiData?.statistics.viewCount)} Views &bull; {moment(apiData?.snippet.publishedAt).fromNow()}</p>
				<div>
					<span><img src={like} alt="" />{valueConverter(apiData?.statistics.likeCount)}</span>
					<span><img src={dislike} alt="" />{valueConverter(apiData?.statistics.dislikeCount)}</span>
					<span><img src={share} alt="" />{valueConverter(apiData?.statistics.shareCount)}</span>
					<span><img src={save} alt="" />{valueConverter(apiData?.statistics.favoriteCount)}</span>
				</div>
			</div>
			<hr />
			<div className="publisher">
				<img src={channelData?.snippet?.thumbnails?.default?.url ? channelData?.snippet?.thumbnails?.default?.url:""} alt="" />
				<div>
					<p>{channelData?.snippet?.title}</p>
					<span>{valueConverter(channelData?.statistics.subscriberCount)} Subscribers</span>
				</div>
				<button>Subscribe</button>
			</div>
			<div className="vid-description">
				<p>{apiData?.snippet?.description.slice(0,200)}</p>
				<hr />
				<h4>{valueConverter(apiData?.statistics.commentCount)} Comments</h4>
				{commentData ? commentData.map((item, i) => (
						<div className="comment" key={i}>
							<img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
							<div>
								<h3>{item.snippet.topLevelComment.snippet.authorDisplayName} <span>2 days ago</span></h3>
								<p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
								<div className="comment-action">
									<img src={like} alt="" />
									<span>{valueConverter(item.snippet.topLevelComment.snippet.likeCount)}</span>
									<img src={dislike} alt="" />
									<span>{valueConverter(item.snippet.topLevelComment.snippet.dislikeCount)}</span>
								</div>
							</div>
						</div>
					)) : 'Loading comments...'}

				
			</div>
		</div>
	)
}

export default PlayVideo