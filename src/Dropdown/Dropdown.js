import React from 'react';
import './Dropdown.css';


const title = [
	['Profile', './pics/navbar/Profile.png'],
	['Publications', './pics/navbar/Publications.png'],
	['Projects', './pics/navbar/Projects.png'],
	['Team', './pics/navbar/Team.png'],
	['Services', './pics/navbar/Services.png']
];

const Dropdown = (props) => {
	
	return (title.map((item) => 
		<p 
			className = 'navbar-item' 
			onClick = {props.changePage} 
			key = {item[0]} 
			id = {item[0]}>
			<span>{item[0]}</span> <br/><img src = {item[1]} alt = 'alert'/>
		</p>
	));
}

export default Dropdown;