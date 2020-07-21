import React from 'react';
import { StyledProfile } from './Profile.styled';
import chuks from '../../assets/chuks.jpeg';
import vivek from '../../assets/vivek.jpeg';
import sherry from '../../assets/sherry.jpeg';

const Profile = () => {
	return (
		<StyledProfile>
			<section id="about">
				<div className="sectionInner">
					<div className="splitSection clearfix">
						<img className="img-circle" src={chuks} alt="chuks"></img>
						<img className="img-circle" src={sherry} alt="sherry"></img>
						<img className="img-circle" src={vivek} alt="vivek"></img>

					</div>
				</div>
			</section>

		</StyledProfile>
	)
}

export default Profile