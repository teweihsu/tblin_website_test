import React from 'react';
import './ProjectGenerator.css';

const ProjectGenerator = (props) => {
	let content = props.projects;
	let temp = [];
	let now_check = content[0].department;
	
	for (let index = 1 ; index < content.length ; index ++) {
		if (content[index].department !== now_check) {
			
			let to_append = content
			.filter( item => item.department === now_check)
			.map((item) => 
				<li key = {item.description}>
				{item.title}
			</li>)

			temp.push(<h4>{now_check}</h4>);
			temp.push(<ol className = 'projects_content'>{to_append}</ol>);
			now_check = content[index].department;
			
		}
	}
	let to_append = content
			.filter( item => item.department === now_check)
			.map((item) => 
				<li key = {item.description}>
				{item.title}
			</li>)
	temp.push(<h4>{now_check}</h4>);
	temp.push(<ol>{to_append}</ol>);
	
	return temp;
}

export default ProjectGenerator;