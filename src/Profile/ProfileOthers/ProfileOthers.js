import React from 'react';
import './profileOthers.css';


const ProfileOthers = (props) => {
	
	let education_to_append = props.edu.map((item) => 
		<p key = {item.description}><strong><em>{item['first']}</em></strong>, {item['second']}</p>
	)
	education_to_append.unshift(<h3 id="education" key = 'edu'>Education</h3>);

	let work_to_append = props.work.map((item) => 
		<p key = {item.description}>{item['first']}<br />{item['second']}<br/><em>{item['third']}</em></p>
	)
	work_to_append.unshift(<h3 key = 'work'>{props.work[0].category}</h3>);

	let awards_to_append = props.award.map((item) => 
		<tr key = {item.description}><td>{item['first']}&nbsp;&nbsp;&nbsp;&nbsp;</td><td>{item['second']}</td></tr>
	)
	;

	let research_to_append = props.research.map((item) => 
		<li key = {item.description}>{item['first']}</li>
	)
	return (
		<div className = 'profileOthers'>
			
			{education_to_append}
			{work_to_append}
			<h3>Awards & Grants</h3>
			<table><tbody>{awards_to_append}</tbody></table>

			<h3>Research Interests</h3>
			<ol>{research_to_append}</ol>

		</div>
	);
}

export default ProfileOthers;