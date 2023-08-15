import Skills from './Skills';
import styled from 'styled-components';
const AboutMe = () => {
	const Content = styled.div``;

	const Technicals = styled.h1`
		text-align: center;
		margin-bottom: 30px;
		@media (max-width: 700px) {
			margin-top: 230px;
		}
	`;
	const AboutSection = styled.div`
		display: flex;
		flex-wrap: wrap;
		padding: 20px;
		height: 80vh;
		align-items: center;
		justify-content: space-evenly;
		@media (max-width: 500px) {
		}

		//im just having fun with css
	`;
	const About = styled.div`
		text-align: center;
		h1 {
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
	`;

	const ImageSection = styled.div`
		width: 300px;
		height: 500px;

		overflow: hidden;
		border-radius: 10px;
		@media (max-width: 840px) {
			margin-top: 40px;
			height: 300px;
		}

		img {
			width: 200%;
			height: 100%;
			object-fit: cover;
			transform: translateX(-50%);
			position: relative;
			left: 50%;
		}
	`;

	return (
		<>
			<Content>
				<AboutSection>
					<About>
						<h1>Said Gadzhiev</h1>
						<p>
							Web developer and designer, embarking on an exciting journey into
							the world of web creation. Eager to translate imagination into
							captivating digital experiences. Committed to learning, growing,
							and crafting innovative solutions that captivate users. Passionate
							about crafting a dynamic online realm that merges functionality
							with aesthetics.
						</p>
						<a href='#' class='link-container'>
							Resume
							<span class='link-arrow'>➔</span>
						</a>
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
