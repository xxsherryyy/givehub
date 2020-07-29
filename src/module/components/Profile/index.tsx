import React from 'react';
import { StyledProfile } from './Profile.styled';
import chuks from '../../assets/chuks.jpeg';
import vivek from '../../assets/vivek.jpeg';
import sherry from '../../assets/sherry.jpeg';
import { ReactComponent as Linkedin } from '../../assets/linkedin.svg';

const Profile = () => {
	return (
		<StyledProfile>
			<div>
			<section id="about">
				ABOUT
				<div className="blurb">
					<b>GiveHub</b> is a team of <b>Dallasite web developers</b> who love their city and want to <b>give back to our community </b>in the most <b>21st century</b> way. 
					We know our community is great at what they do, as a local shop, small business or community center. 
					We understand that today's challenges wont be the same as tommorrow's in this ever changing digital age.
					That's why we want to lend a hand (<i>or three</i>) in these tough times and help you keep doing what you do best.
					
				</div>
				<div className="sectionInner">
					The Team
					<div className="splitSection clearfix">
						<div>
							<img className="img-circle" src={chuks} alt="chuks"></img>
							<div className="splitSection">Chuks</div>
							<a target="_blank" href="https://www.linkedin.com/in/chuks-grinage"><Linkedin className="linkedin" /></a>
						</div>
						<div>
						<img className="img-circle" src={sherry} alt="sherry"></img>
						<div className="splitSection" >Sherry</div>
						<a target="_blank" href="https://www.linkedin.com/in/sherry-x-yang"><Linkedin className="linkedin" /></a>
						</div>
						<div>
							<img className="img-circle" src={vivek} alt="vivek"></img>
							<div className="splitSection">Vivek</div>
							<a target="_blank" href="https://www.linkedin.com/in/vputtaparthi"><Linkedin className="linkedin" /></a>
						</div>
						

					</div>
					<div className="splitSection">
						
						
						

					</div>
				</div>
			</section>
</div>
		</StyledProfile>
	)
}

export default Profile