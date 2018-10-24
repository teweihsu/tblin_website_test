import React from 'react';
import ServicesGenerator from './ServicesGenerator/ServicesGenerator';

const Services = (props) => {
	let categories = [];
	let to_render = [];
	for (let item in props.contents) {
		categories.push(item);
	}
	for (let i = 0 ; i < categories.length ; i ++) {
		to_render.push(<h3>{categories[i]}</h3>);
		to_render.push(<ServicesGenerator services = {props.contents[categories[i]]}/>);
	}

	return (
		<div>
			<div className = 'column big left extended'>

				{to_render}				

			</div>
			<div className = 'column small right static_others'>
				<img className = 'photo' src = './pics/services_sidephoto.png' alt = 'error'/>
			</div>
		</div>
	);
}


export default Services;