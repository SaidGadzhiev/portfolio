import { skills } from '../skillsData';
import { useEffect } from 'react';
import Swiper from 'swiper';
import useMobileSize from '../hooks/useMobileSize';
import {
	Navigation,
	Pagination,
	Autoplay,
	EffectCards,
	FreeMode,
} from 'swiper/modules';
import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/free-mode';
import { useTheme } from './ThemeContext';

const Skills = () => {
	Object.entries(skills).map((skill) => {
		console.log(skill);
	});

	const isMobile = useMobileSize();
	const { isDarkTheme } = useTheme();
	console.log(isDarkTheme);
	console.log(isMobile);

	console.log(Object.entries(skills).length);
	useEffect(() => {
		Swiper.use([Navigation, Pagination, Autoplay, FreeMode]);
		const swiper = new Swiper('.swiper', {
			slidesPerView: 2,
			speed: isMobile ? 0 : 5000,
			spaceBetween: 10,
			freeMode: !isMobile,
			breakpoints: {
				500: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
				750: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
				1200: {
					slidesPerView: 5,
					spaceBetween: 30,
				},
			},
			autoplay: {
				delay: 0,
				disableOnInteraction: false,
			},
			loop: true,
			effect: 'cards',
			modules: isMobile ? [EffectCards] : [Pagination, FreeMode],
			cardsEffect: {},
		});
	}, [isMobile]);

	const AllSkills = styled.div`
		overflow: visible;
		margin-bottom: 20px;

		@media (max-width: 500px) {
			overflow: hidden;
			width: 390px;
			margin-left: -40px;
			.swiper-wrapper {
				margin: 0 auto;
				width: 230px;
			}
		}
		@media (min-width: 500px) and (max-width: 715px) {
			margin-left: 0;
			margin: 0 auto;
			width: 500px;
			.swiper-wrapper {
				margin: 0 auto;
				width: 300px;
			}
		}
	`;

	const Slider = styled.div`
		background-color: #212121;
		color: #eeeff1 !important;
		border-radius: 10px;
		border: ${({ isDarkTheme }) =>
			isDarkTheme ? '2px solid #34c483' : 'none'};
		text-align: center;
		height: 350px;
		cursor: grab;
		text-align: left;
		line-height: 1.6;
		overflow: visible;

		&:active {
			cursor: grabbing;
		}
		padding: 20px;
		position: relative;

		h1 {
			color: #eeeff1;
			text-transform: uppercase;
			margin-bottom: 20px;
		}
		h3 {
			margin-bottom: 40px;
			font-family: 'Roboto-mono', monospace;
		}
		p {
			color: #eeeff1;
		}

		a {
			color: #eeeff1;
			position: absolute;
			bottom: 0;
			margin-bottom: 10px;
		}

		@media (max-width: 550px) {
			width: 300px;
			margin: 0 auto;

			height: 400px;
		}

		@media (max-width: 715px) {
			height: 400px;
		}
		&:hover {
			background-color: #34c483;
			h1,
			p,
			a,
			h3 {
				color: #212121;
			}
		}
	`;
	return (
		<>
			<AllSkills className='swiper'>
				<div className='swiper-wrapper'>
					{Object.entries(skills).map((skill, index) => {
						console.log(skill);
						return (
							<Slider
								className='swiper-slide'
								key={index}
								isDarkTheme={isDarkTheme}
							>
								<h1>{skill[1].id}</h1>
								<h3>{skill[1].subtitle}</h3>
								<p>{skill[1].description}</p>
								<a href={skill[1].url} target='_blank'>
									{skill[1].id}
								</a>
							</Slider>
						);
					})}
				</div>
			</AllSkills>
		</>
	);
};

export default Skills;
