import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleMenuToggle = () => {
		console.log(isMenuOpen);
		setIsMenuOpen(!isMenuOpen);
	};

	const Header = styled.nav`
		display: flex;
		justify-content: space-between;
		align-items: center;

		div {
			display: flex;
			gap: 25px;
		}
		a {
			text-decoration: none;
			font-size: 18px;
			color: ${isMenuOpen ? '#eeeff1' : '#212121'};
		}

		//media for mobile and tablet
		@media screen and (max-width: 767px) {
			.hamburger {
				cursor: pointer;
				z-index: 2;
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
				z-index: 1;
			}
			.nav.active a {
				margin: 0.5rem 0;
			}
		}

		//media for tablet and desktop
		@media screen and (min-width: 768px) {
			.hamburger {
				display: none;
			}
		}
	`;

	return (
		<>
			<Header>
				{/* <div>
					<p>
						{' '}
						<strong>En</strong>
					</p>
					<p>Fr</p>
				</div> */}
				<NavLink to='/'>Logo</NavLink>
				<div className={`nav ${isMenuOpen ? 'active' : ''}`}>
					<NavLink to='/aboutme' onClick={handleMenuToggle}>
						About
					</NavLink>
					<NavLink to='/portfolio' onClick={handleMenuToggle}>
						Portfolio
					</NavLink>
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
			</Header>
		</>
	);
};

export default Header;
