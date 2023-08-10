import { skills } from '../skillsData';
import { useEffect } from 'react';
import Swiper from 'swiper';
import useMobileSize from '../hooks/useMobileSize';
import {
	Navigation,
	Pagination,
	Autoplay,
	EffectCoverflow,
	EffectCards,
} from 'swiper/modules';
import styled from 'styled-components';

import 'swiper/css';
import 'swiper/css/effect-cards';

const Skills = () => {
	Object.entries(skills).map((skill) => {
		console.log(skill);
	});

	const isMobile = useMobileSize();

	console.log(isMobile);

	console.log(Object.entries(skills).length);
	useEffect(() => {
		Swiper.use([Navigation, Pagination, Autoplay, EffectCoverflow]);
		const swiper = new Swiper('.swiper', {
			// slidesPerView: Object.entries(skills).length,
			slidesPerView: 2,
			speed: isMobile ? 0 : 5000,
			spaceBetween: 10,
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
			// initialSlide: 1,
			// navigation: {
			// 	nextEl: '.swiper-button-next',
			// 	prevEl: '.swiper-button-prev',
			// },

			autoplay: {
				delay: 0,
				disableOnInteraction: false,
			},
			loop: true,

			effect: 'cards',
			modules: isMobile ? [EffectCards] : [Pagination],
			cardsEffect: {
				// perSlideOffset: 20,
				// perSlideRotate: 2,
			},

			// Enable infinite loop
			// effect: 'coverflow',
			// coverflowEffect: {
			// 	rotate: 0,
			// 	slideShadows: false,
			// },
		});
	}, [isMobile]);
	const AllSkills = styled.div`
		/* width: 1920px;
		width: 100%; */
		/* height: auto; */
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
		color: #eeeff1;
		border-radius: 10px;
		text-align: center;
		/* width: 500px; */

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
			text-transform: uppercase;
			margin-bottom: 20px;
		}
		h3 {
			margin-bottom: 40px;
			font-family: 'Roboto-mono', monospace;
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
	`;
	return (
		<>
			<AllSkills className='swiper'>
				<div className='swiper-wrapper'>
					{Object.entries(skills).map((skill, index) => {
						console.log(skill);
						return (
							<Slider className='swiper-slide' key={index}>
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
