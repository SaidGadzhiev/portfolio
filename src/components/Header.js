import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
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
			color: #212121;
		}
	`;

	return (
		<>
			<Header>
				<div>
					<p>
						{' '}
						<strong>En</strong>
					</p>
					<p>Fr</p>
				</div>
				<NavLink to='/'>Logo</NavLink>
				<div>
					<NavLink to='/aboutme'>About</NavLink>
					<NavLink to='/portfolio'>Portfolio</NavLink>
					<NavLink to='/contact'>Contact</NavLink>
				</div>
			</Header>
		</>
	);
};

export default Header;
