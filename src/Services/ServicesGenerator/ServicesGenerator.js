import React from 'react';

const ServicesGenerator = (props) => {
	let content = props.services;
	let temp = [];
	let now_check = content[0].location;
	
	for (let index = 1 ; index < content.length ; index ++) {
		if (content[index].location !== now_check) {
			
			let to_append = content
			.filter( item => item.location === now_check)
			.map((item) => 
				<li key = {item.description}>
				{item.service}
			</li>)

			temp.push(<h4>{now_check}</h4>);
			temp.push(<ol className = 'services_content'>{to_append}</ol>);
			now_check = content[index].department;
			
		}
	}
	let to_append = content
			.filter( item => item.department === now_check)
			.map((item) => 
				<li key = {item.description}>
				{item.service}
			</li>)
	temp.push(<h4>{now_check}</h4>);
	temp.push(<ol>{to_append}</ol>);
	
	return temp;
}

export default ServicesGenerator;