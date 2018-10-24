import React from 'react';
import TeamGenerator from './TeamGenerator/TeamGenerator';


const Team = (props) => {
	let categories = [];
	let to_render = [];
	for (let item in props.contents) {
		categories.push(item);
	}
	for (let i = 0 ; i < categories.length ; i ++) {
		to_render.push(<h3>{categories[i]}</h3>);
		to_render.push(<TeamGenerator team = {props.contents[categories[i]]}/>);
	}

	return (
		<div>
			<div className = 'column small left static_team'>
				<img className = 'photo' src = './pics/team_sidephoto.png' alt = 'error'/>
			</div>
			<div className = 'column big right extended'>{to_render}</div>
		</div>
	);
}

export default Team;