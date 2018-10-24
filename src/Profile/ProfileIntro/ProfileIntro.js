import React from 'react';
import './profileIntro.css';


const ProfileIntro = (props) => {

	const to_append = props.intro.map((item) => 
		<div key = {item.description}><p>{item.first}</p></div>
	);
	
	return (
		<div className = 'profileIntro'>
			{to_append}
		</div>	
	);

}

export default ProfileIntro;