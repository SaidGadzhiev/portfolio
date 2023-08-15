import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { github } from 'react-icons-kit/fa/github';
import { linkedin } from 'react-icons-kit/fa/linkedin';
const Footer = () => {
	console.log(window.innerHeight);
	console.log(document.body.offsetHeight);

	//messing around with making stuff visible on scroll
	// const [showFooter, setShowFooter] = useState(false);
	// useEffect(() => {
	// 	const handleScroll = () => {
	// 		const minDistanceFromBottom = 50;
	// 		console.log(window.scrollY);
	// 		console.log(window.innerHeight);
	// 		console.log(document.body.offsetHeight);
	// 		const isAtBottom =
	// 			window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
	// 		setShowFooter(isAtBottom);
	// 	};

	// 	window.addEventListener('scroll', handleScroll);
	// 	return () => {
	// 		window.removeEventListener('scroll', handleScroll);
	// 	};
	// }, []);

	const Content = styled.div`
		background-color: #34c483;
		opacity: 1;
		background: radial-gradient(
				circle,
				transparent 20%,
				#34c483 20%,
				#34c483 80%,
				transparent 80%,
				transparent
			),
			radial-gradient(
					circle,
					transparent 20%,
					#34c483 20%,
					#34c483 80%,
					transparent 80%,
					transparent
				)
				17.5px 17.5px,
			linear-gradient(
					#2121211c 1.4000000000000001px,
					transparent 1.4000000000000001px
				)
				0 -0.7000000000000001px,
			linear-gradient(
					90deg,
					#2121211c 1.4000000000000001px,
					#34c483 1.4000000000000001px
				) -0.7000000000000001px 0;

		background-size: 35px 35px, 35px 35px, 17.5px 17.5px, 17.5px 17.5px;
		margin-top: 100px;
		background-color: #34c483;
		position: absolute;
		bottom: ${document.body.offsetHeight};
		left: 0;
		width: 100vw;
		margin-top: 100px;
		text-align: center;
		@media screen and (min-width: 767px) and (max-width: 1000px) {
			margin-top: 216px;
		}

		@media screen and (min-width: 767px) {
			height: 98px;
			width: 100%;
			padding: 20px;

			display: flex;
			justify-content: space-around;
			align-items: center; /* Align items vertically at the center */
		}
		a {
			color: #212121;
			text-decoration: none;
		}

		nav {
			margin-top: 20px;
			@media screen and (min-width: 767px) {
				margin-top: 0;
				div {
					display: flex;
					align-items: center;
					gap: 20px;
				}
			}

			h1 {
				color: #212121;
			}

			h3 {
				font-size: 25pt;
			}
			p {
				font-size: 12pt;
				font-weight: bold;
			}
		}

		div p {
			color: #212121;
		}
	`;

	const SocialLinks = styled.div`
		text-align: center;
		margin-top: 20px;
		margin-bottom: 20px;
		a {
			margin-right: 10px;
			margin-left: 10px;
		}
	`;

	return (
		<>
			<Content>
				<nav>
					<NavLink to='/'>
						<div>
							<h1>SG</h1>
							<p>said gadzhiev</p>
						</div>
					</NavLink>
				</nav>
				<SocialLinks>
					<a href='/'>
						<Icon size={32} icon={github} />
					</a>
					<a href='/'>
						<Icon size={32} icon={linkedin} />
					</a>
				</SocialLinks>
				<div id='rights'>
					<p>All Rights Reserved &copy; 2023 Said Gadzhiev</p>
				</div>
			</Content>
		</>
	);
};

export default Footer;
