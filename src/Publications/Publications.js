import React from 'react';
import './Publications.css';

const publicationGenerator = (content) => {
	let temp = [];
	for (let category in content) {
		let to_append = content[category].map((item) => 
			<li key = {item.description}>
				{item.title} <b>{item.index}</b>
			</li>
		)
		temp.push(<div><h3>{category}</h3><ol className = 'publications_content'>{to_append}</ol></div>);
	}
	return temp;
}

const Publications = (props) => {
	
	return (
		<div>
			<div className = 'column big left extended'>
				{publicationGenerator(props.contents)}
			</div>
			
			<div className = 'column small right static_publications'>
				<img className = 'photo' src = './pics/publications_sidephoto.png' alt = 'error' />
				<p>google scholar</p>
			</div>
		</div>
	);
}

export default Publications;