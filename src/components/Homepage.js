import Particles from 'particlesjs';
import styled from 'styled-components';
import { useEffect } from 'react';

const Homepage = () => {
	const particlesJS = window.particlesJS;

	//code for particles in the background, removed until further update
	// useEffect(() => {
	// 	particlesJS('particles-js', {
	// 		/* Customize the particles settings here */
	// 		selector: '.background',
	// 		color: 'black',
	// 		sizeVariations: 3,
	// 		connectParticles: true,

	// 		maxParticles: 2,
	// 		shape: 'line',
	// 		size: 1,
	// 	});
	// }, []);

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

	const Main = styled.div`
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: 1052px;
		width: 100%;
		h1 {
			font-size: 35px;
			text-align: center;
			margin-bottom: 0;
			max-width: 732px;
			width: 100%;
			line-height: 1.2;
		}

		h3 {
			text-align: left;
			margin-bottom: 60px;
			margin-top: 10px;
		}
	`;
	const ImageContainer = styled.div`
		width: 150px;
		height: 150px;
		overflow: hidden;
		position: relative;
		border-radius: 10px;
	`;
	const Pfp = styled.img`
		width: 217px;
		height: auto;
		position: absolute;
		top: -89px;
		left: -22px;
	`;

	const Buttons = styled.div`
		width: 100%;
		text-align: center;
		margin-top: 70px;

		button {
			width: 100px;
			height: 50px;
			margin: 20px;
			border: solid 1px gray;
			background-color: #212121;
			color: #eeeff1;
			border-radius: 5px;
			font-family: 'Montserrat', sans-serif;
			font-weight: lighter;
			font-size: 15px;
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
				{/* background animated particles, removed until further update */}
				{/* <Background className='background' id='particles-js' /> */}

				{/* <ParticlesBg></ParticlesBg> */}
				<Main>
					<ImageContainer>
						<Pfp src='pfp.jpg'></Pfp>
					</ImageContainer>

					<h3>Said's portfolio</h3>
					<h1>Creating digital experiences, one line at a time.</h1>
					<Buttons>
						<button>About Me</button>
						<button>Projects</button>
					</Buttons>
				</Main>
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
