import styled from 'styled-components';
import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import { titleWords } from '../wordsData';

const Homepage = ({ setHomepageActive }) => {
	useEffect(() => {
		setHomepageActive(true);
		return () => {
			setHomepageActive(false);
		};
	}, []);
	// console.log(titleWords);

	// titleWords.map((word) => {
	// 	console.log(word);
	// });

	const [currentWord, setCurrentWord] = useState(0);
	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentWord((prevIndex) => (prevIndex + 1) % titleWords.length);
		}, 4000);

		return () => {
			clearInterval(intervalId);
		};
	});

	const particlesJS = window.particlesJS;

	const Background = styled.div`
		width: 100vw;
		height: 100vh;
	`;
	const HeroSection = styled.div`
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 87vh;
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

			span {
				animation: fadeInOut 4s infinite;
				opacity: 0; /* Initially hide the element */

				/* Additional styling, adjust as needed */
			}

			@keyframes fadeInOut {
				0%,
				100% {
					opacity: 0;
				}
				50% {
					opacity: 1;
				}
			}
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
			font-weight: 500;
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
					{/* <ImageContainer>
						<Pfp src='pfp.jpg'></Pfp>
					</ImageContainer> */}

					{/* <h3>Said's portfolio</h3> */}
					<h1>
						Creating <span>{titleWords[currentWord]}</span>, one line at a time.
					</h1>
					<Buttons>
						<button>About Me</button>
						<button>Projects</button>
					</Buttons>
				</Main>
				<SocialLinks>
					<a
						href='https://github.com/your-github-profile'
						target='_blank'
						rel='noopener noreferrer'
					>
						<Icon icon='devicon:github' />
					</a>
					<a href='#'>G</a>
					<a href='#'>G</a>
				</SocialLinks>
			</HeroSection>
		</>
	);
};

export default Homepage;
