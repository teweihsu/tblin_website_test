import React from 'react';
import './ProfileInfo.css';


const ProfileInfo = (props) => {
	let caption = props.caption;
	return(
		<div className = 'info'>
			<img src = './pics/2018_TBL.jpg' alt = 'error'/>
			<p>{caption[0].first}</p>
			<p>{caption[1].first}<br />{caption[1].second}</p>
			<p>{caption[2].first}</p>
		</div>
	);
}

export default ProfileInfo;