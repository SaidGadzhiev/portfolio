import { skills } from '../skillsData';
import { useEffect } from 'react';
import Swiper from 'swiper';
import {
	Navigation,
	Pagination,
	Autoplay,
	EffectCoverflow,
} from 'swiper/modules';
import styled from 'styled-components';

import 'swiper/css';
import 'swiper/css/effect-coverflow';

const Skills = () => {
	Object.entries(skills).map((skill) => {
		console.log(skill);
	});

	console.log(Object.entries(skills).length);
	useEffect(() => {
		Swiper.use([Navigation, Pagination, Autoplay, EffectCoverflow]);
		const swiper = new Swiper('.swiper', {
			// slidesPerView: Object.entries(skills).length,
			slidesPerView: 5,
			speed: 5000,
			spaceBetween: 70,
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 40,
				},
				500: {
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
			loop: true, // Enable infinite loop
			// effect: 'coverflow',
			// coverflowEffect: {
			// 	rotate: 0,
			// 	slideShadows: false,
			// },
		});
	});
	const AllSkills = styled.div`
		/* width: 1920px;*/
		width: 100%;
		/* height: auto; */
		overflow: visible;
		margin-bottom: 20px;
	`;
	const Slider = styled.div`
		background-color: #212121;
		color: #eeeff1;
		border-radius: 10px;
		text-align: center;
		width: 500px;
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

		@media (max-width: 768px) {
			width: 100px;
		}

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
