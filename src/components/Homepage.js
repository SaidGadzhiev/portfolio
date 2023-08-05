import Particles from 'particlesjs';
import styled from 'styled-components';
import { useEffect } from 'react';

const Homepage = () => {
	const particlesJS = window.particlesJS;

	useEffect(() => {
		particlesJS('particles-js', {
			/* Customize the particles settings here */
			selector: '.background',
			color: '#000000',
			sizeVariations: 0.1,
			maxParticles: 2,
		});
	}, []);

	const Background = styled.div`
		width: 100vw;
		height: 100vh;
	`;
	const HeroSection = styled.div`
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 90vh;
	`;

	const Title = styled.div`
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: 1052px;
		width: 100%;
		h1 {
			font-size: 60px;
			text-align: left;
			margin-bottom: 0;
			max-width: 732px;
			width: 100%;
			line-height: 1;
		}

		h3 {
			text-align: left;
			margin-top: 30px; /* Set margin-top to 0 to make the elements touch */
		}
	`;

	const SocialLinks = styled.div`
		@media screen and (max-width: 767px) {
			display: none;
		}

		@media screen and (min-width: 768px) {
			position: absolute;
			top: 50%;
			right: 0;
			transform: translateY(-50%); /* Center the SocialLinks vertically */
			display: flex;
			flex-direction: column;
			align-items: flex-end; /* Align SocialLinks to the right */
			a {
				margin-bottom: 10px;
			}
		}
	`;

	return (
		<>
			<HeroSection>
				<Background className='background' id='particles-js' />

				{/* <ParticlesBg></ParticlesBg> */}
				<Title>
					<h1>Said's portfolio</h1>
					<h3>Crafting Innovation: Where Creativity Meets Code</h3>
				</Title>
				<SocialLinks>
					<a href='#'>L</a>
					<a href='#'>G</a>
					<a href='#'>G</a>
				</SocialLinks>
			</HeroSection>
		</>
	);
};

export default Homepage;
