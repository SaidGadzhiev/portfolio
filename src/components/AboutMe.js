import Skills from './Skills';
import styled from 'styled-components';
const AboutMe = () => {
	const Content = styled.div`
		@media (max-width: 768px) {
		}
	`;

	const Technicals = styled.h1`
		text-align: center;
		margin-bottom: 30px;
		@media (max-width: 768px) {
			margin-top: 150px;
		}
	`;
	const AboutSection = styled.div`
		display: flex;
		flex-wrap: wrap;
		padding: 20px;
		height: 80vh;
		align-items: center;
		justify-content: space-around;
	`;
	const About = styled.div`
		padding: 10px;
		text-align: center;
		h1 {
			width: 400px;
			margin: 0 auto;
			text-align: left;
			margin-bottom: 20px;
			@media (max-width: 768px) {
				text-align: center;
				margin-top: 20px;
			}
		}

		p {
			padding: 0 !important;
			font-weight: 400;
			margin-right: 20px;
			text-align: left;
			width: 400px;
			margin: 0 auto;
			margin-bottom: 40px;
			@media (max-width: 768px) {
				width: 300px;
			}
		}
		a {
			text-align: left;
		}
	`;

	const ImageSection = styled.div`
		width: 300px; /* Set the desired width */
		height: 500px; /* Set the desired height */

		overflow: hidden;
		border-radius: 10px;
		@media (max-width: 768px) {
			margin-top: 40px;
			height: 300px;
		}

		img {
			width: 200%; /* Enlarge the image's width */
			height: 100%; /* Maintain the container's height */
			object-fit: cover;
			transform: translateX(-50%); /* Move the image horizontally */
			position: relative; /* Needed for transform */
			left: 50%;
		}
	`;

	return (
		<>
			<Content>
				<AboutSection>
					<About>
						<h1>AboutMe</h1>
						<p>
							Aspiring web developer and designer, embarking on an exciting
							journey into the world of web creation. Eager to translate
							imagination into captivating digital experiences. Committed to
							learning, growing, and crafting innovative solutions that
							captivate users. Passionate about crafting a dynamic online realm
							that merges functionality with aesthetics.
						</p>

						<a href=''>Resume</a>
					</About>
					<ImageSection>
						<div></div>
						<img src='./pfp.jpg'></img>
					</ImageSection>
				</AboutSection>
				<Technicals>Technical Skills</Technicals>
				<Skills />
			</Content>
		</>
	);
};

export default AboutMe;
