import styled from 'styled-components';
import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import { titleWords } from '../wordsData';
import { Link } from 'react-router-dom';

const Homepage = ({ setHomepageActive }) => {
	useEffect(() => {
		setHomepageActive(true);
		return () => {
			setHomepageActive(false);
		};
	}, []);

	const [currentWord, setCurrentWord] = useState(0);
	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentWord((prevIndex) => (prevIndex + 1) % titleWords.length);
		}, 4000);

		return () => {
			clearInterval(intervalId);
		};
	});

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
				opacity: 0;
				color: #34c483;
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
		text-align: center;
		margin-top: 70px;

		.link-container {
			margin-right: 20px;
			border: 2px solid #212121;
			align-items: center;
			border-radius: 5px;
			width: 120px;
			height: 40px;
			padding-top: 15px;
			padding-left: 10px;
			text-align: center;
			display: inline-block;
			color: black;
			text-decoration: none;
			position: relative;
			overflow: hidden;
			transition: transform 0.3s ease-in-out;
			font-weight: bold;
			font-size: 18px;
			float: none;
			@media (min-width: 768px) {
				float: left;
			}
		}
		.link-container::before {
			content: '';
			position: absolute;
			width: 100%;
			height: 2px;
			bottom: -2px;
			left: 0;
			transform: scaleX(0);
			transform-origin: left;
			transition: transform 0.3s ease-in-out;
		}
		.link-container:hover {
			color: #212121;
			transform: translateX(-10px);
			background-color: #34c483;
			border: #34c483 2px solid;
		}
		.link-container:hover::before {
			transform: scaleX(1);
		}
		.link-arrow {
			display: inline-block;
			margin-left: 5px;
			opacity: 0;
			transform: translateX(10px);
			font-size: 12px;
			transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
		}
		.link-container:hover .link-arrow {
			opacity: 1;
			transform: translateX(0);
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
				<Main>
					<h1>
						Creating <span>{titleWords[currentWord]}</span>, one line at a time.
					</h1>
					<Buttons>
						<Link to='/aboutme' class='link-container'>
							About Me
							<span class='link-arrow'>➔</span>
						</Link>{' '}
						<Link to='/projects' class='link-container'>
							Projects
							<span class='link-arrow'>➔</span>
						</Link>
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
