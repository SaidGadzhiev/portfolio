import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from './ThemeContext';
import { ThemeProvider } from './ThemeContext';

const Header = (props) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { isDarkTheme, toggleTheme } = useTheme();
	// const { toggleTheme } = useContext(ThemeProvider);

	const handleMenuToggle = () => {
		console.log(isMenuOpen);
		setIsMenuOpen(!isMenuOpen);
	};

	const handleToggleTheme = () => {
		console.log('hello');
		console.log(isDarkTheme);
	};

	const Content = styled.nav`
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #21212130;
		padding-bottom: 10px;
		span {
			color: #34c483;
		}
		@media screen and (max-width: 767px) {
			span {
				color: #eeeff1;
			}
		}

		.logo {
			font-size: 25pt;

			div {
				line-height: 40px;
				vertical-align: middle;
				h3 {
					margin-right: -10px;
				}
				p {
					font-size: 18px;
				}
			}
		}

		////
		// this css is not active, it is there for a button in construction
		.toggle-switch {
			position: relative;
			width: 68px;
		}

		label {
			/* position: absolute; */
			width: 100%;
			height: 37px;
			background-color: black;
			border-radius: 50px;
			cursor: pointer;
		}

		input {
			position: absolute;
			display: none;
		}

		.slider {
			position: absolute;
			width: 100%;
			height: 100%;
			border-radius: 50px;
			transition: 0.3s;
		}

		input:checked ~ .slider {
			background-color: white;
		}

		.slider::before {
			content: '';
			position: absolute;
			top: 8px;
			left: 16px;
			width: 20px;
			height: 20px;
			border-radius: 59%;
			box-shadow: inset 7px -4px 0px 0px white;
			background-color: black;
			transition: 0.3s;
		}

		input:checked ~ .slider::before {
			transform: translateX(20px);
			background-color: black;
			box-shadow: none;
		}
		///////

		div {
			display: flex;
			gap: 25px;
		}
		a {
			text-decoration: none;
			font-size: 18px;
			/* color: #212121; */
			font-weight: 500;
		}

		//media for mobile and tablet
		@media screen and (max-width: 767px) {
			.hamburger {
				cursor: pointer;
				z-index: 2;
				color: #34c483;
			}
			.hamburger.active {
				color: #eeeff1;
			}
			.nav {
				position: absolute;
				top: 0;
				height: 100vh;
				display: none;
				padding: 0;
				left: 0;
				top: 0;
				width: 100vw;
				color: red;
				background-color: #212121;
				flex-direction: column;
				align-items: center;
				justify-content: center;
			}
			.nav.active {
				display: inherit;
				z-index: 2;
				position: fixed;
			}
			.nav.active a {
				margin: 0.5rem 0;
				color: #eeeff1;
			}
		}

		//media for tablet and desktop
		@media screen and (min-width: 768px) {
			.hamburger {
				display: none;
			}
			.nav {
				display: inherit;
			}
		}

		.toggleButton {
			width: 60px;
			height: 25px;
			background-color: #eeeff1;
			border: 1px solid #212121;

			border-radius: 15px;
			position: relative;
			cursor: pointer;
		}
		.circle {
			width: 19px;
			height: 19px;
			background-color: #34c483;
			border-radius: 50%;
			position: absolute;
			top: 3px;
			left: 6px;
			transition: transform 0.3s ease, background-color 0.3s ease; /* Use transform for smoother animation */
		}

		.theme-on {
			background-color: #eeeff1;
		}
		.theme-on .circle {
			transition: 0.5s ease-in-out;
			transform: translateX(30px);
			background-color: #34c483;
		}
	`;

	return (
		<>
			<Content>
				<NavLink to='/' className='logo'>
					<div>
						<h1>SG</h1>
						<p>said gadzhiev</p>
					</div>
				</NavLink>
				<div className={`nav ${isMenuOpen ? 'active' : ''}`}>
					{/* <div className='toggle-switch' onClick={toggleTheme}>
						<label>
							<input type='checkbox'></input>
							<span class='slider'></span>
						</label>
					</div> */}

					<div
						onClick={toggleTheme}
						className={`toggleButton ${isDarkTheme ? 'theme-on' : ''}`}
					>
						<div className='circle'></div>
					</div>

					<NavLink to='/aboutme' onClick={handleMenuToggle}>
						About
					</NavLink>
					<span>/</span>
					<NavLink to='/projects' onClick={handleMenuToggle}>
						Projects
					</NavLink>
					<span>/</span>

					<NavLink to='/contact' onClick={handleMenuToggle}>
						Contact
					</NavLink>
				</div>

				<div
					className={`hamburger ${isMenuOpen ? 'active' : ''}`}
					onClick={handleMenuToggle}
				>
					<FontAwesomeIcon icon={faBars} />
				</div>
			</Content>
		</>
	);
};

export default Header;
