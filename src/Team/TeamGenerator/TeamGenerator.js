import React from 'react';

const TeamGenerator = (props) => {
	console.log(props.team);
	let content = props.team;	
	let temp = content.map((item) => <li>{item.name}</li>)
	return <ol>{temp}</ol>;
}

export default TeamGenerator;