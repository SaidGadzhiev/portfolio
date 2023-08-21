import styled from 'styled-components';
// import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import { titleWords } from '../wordsData';
import { Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import InitialTransition from './InitialTransition';

const Homepage = ({ setHomepageActive }) => {
	useEffect(() => {
		setHomepageActive(true);
		return () => {
			setHomepageActive(false);
		};
	}, []);

	console.log('hello');

	//rotating a different word everytime
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
		flex-direction: column;

		h1 {
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

			//transition for word rotation
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
	`;

	const Buttons = styled.div`
		margin-top: 70px;
		display: flex;
		gap: 20px;
	`;

	return (
		<>
			<AnimatePresence>
				<InitialTransition />
				<HeroSection>
					<h1>
						Creating <span>{titleWords[currentWord]}</span>, one line at a time.
					</h1>
					<Buttons>
						<Link to='/aboutme' className='link-container'>
							About Me
							<span className='link-arrow'>➔</span>
						</Link>{' '}
						<Link to='/projects' class='link-container'>
							Projects
							<span className='link-arrow'>➔</span>
						</Link>
					</Buttons>
				</HeroSection>
			</AnimatePresence>
		</>
	);
};

export default Homepage;
