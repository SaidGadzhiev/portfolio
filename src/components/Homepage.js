import styled from 'styled-components';

const Homepage = () => {
	const HeroSection = styled.div`
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 95vh;
	`;

	const Title = styled.div`
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: 1052px;
		width: 100%;
		padding: 0 16px;
		h1 {
			font-size: 50px;
			text-align: right;
			margin-bottom: 0;
			align-self: flex-start;
			max-width: 732px;
			margin-left: -31px;
			width: 100%;
		}

		h3 {
			text-align: left;
			margin-top: 0; /* Set margin-top to 0 to make the elements touch */
			align-self: flex-end;
		}
	`;

	const SocialLinks = styled.div`
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
	`;

	return (
		<>
			<HeroSection>
				<Title>
					<h1>Crafting captivating digital experiences</h1>
					<h3>Unleashing Creativity, One Pixel at a Time</h3>
				</Title>
				<SocialLinks>
					<a href='#'>L</a>
					<a href='#'>G</a>
					<a href='#'>G</a>
				</SocialLinks>
			</HeroSection>
		</>
	);
};

export default Homepage;
