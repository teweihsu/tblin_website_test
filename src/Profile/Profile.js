import React from 'react';

import ProfileIntro from './ProfileIntro/ProfileIntro';
import ProfileOthers from './ProfileOthers/ProfileOthers';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = (props) => {

	let profile_caption = props.contents.caption;
	let profile_intro = props.contents['Introduction'];
	let profile_edu = props.contents['Education'];
	let profile_work = props.contents['Work Experiences'];
	let profile_award = props.contents['Awards & Grants'];
	let profile_research = props.contents['Research Interests'];
	return (
		<div>
			<div className = 'column small left static_profile'>
				<ProfileInfo caption = {profile_caption}/>
			</div>
			<div className = 'column big right extended'>
				<ProfileIntro intro = {profile_intro}/>
				<ProfileOthers 
					edu = {profile_edu} 
					work = {profile_work} 
					award = {profile_award} 
					research = {profile_research}
				/>
			</div>
			
		</div>
	);
}

export default Profile;