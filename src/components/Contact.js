import styled from 'styled-components';

const Contact = () => {
	const Content = styled.div`
		width: 450px;
		max-width: 100%;
		margin: 0 auto;

		@media screen and (min-width: 1000px) {
			width: 1000px;
			max-width: 100%;
			display: flex;
			justify-content: space-between;
			padding-left: 20px;
			padding-right: 20px;
			align-items: center;
			margin-top: 150px;
		}

		.title {
			margin-top: 20px;
			margin-bottom: 40px;
		}
		h4,
		h1 {
			text-align: center;
			margin-bottom: 10px;
		}
		form {
			margin-top: 20px;
			@media screen and (min-width: 768px) {
				margin-right: 50px;
			}
			div {
				margin-top: 20px;
				display: flex;
				flex-direction: column;
				label {
					margin-bottom: 10px;
					font-family: 'Montserrat', sans-serif;
					font-weight: 600;
				}
				input {
					height: 40px;
					border: black 1px solid;
					border-radius: 5px;
					background-color: #eeeff1;
					border-color: red 2px solid;
					padding-left: 10px;
					font-size: 12pt;

					&:focus {
						outline: none;
						background-color: #34c48370;
					}
				}

				textarea {
					background-color: #eeeff1;
					border: black 1px solid;

					border-radius: 5px;
					margin-bottom: 20px;
					max-width: 500px;
					&:focus {
						outline: none;
						background-color: #34c48370;
					}
				}
			}

			#submit-button {
				display: inherit;
				margin: 0 auto;
				text-align: center;

				#submit {
				}
			}
		}
		//buttons styling
		.link-container {
			border: 2px solid #212121;
			align-items: center;
			border-radius: 5px;
			width: 120px;
			height: 50px;
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
			background-color: #eeeff1;
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
			color: #212121; /* Hover text color */
			transform: translateX(-10px); /* Slide text to the left */
			background-color: #34c483;
			border: #34c483 2px solid;
			cursor: pointer;
		}
		.link-container:hover::before {
			transform: scaleX(1);
		}
		.link-arrow {
			display: inline-block;
			margin-left: 5px; /* Adjust spacing between text and arrow */
			opacity: 0;
			transform: translateX(10px); /* Move arrow to the right */
			font-size: 12px;
			transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
		}
		.link-container:hover .link-arrow {
			opacity: 1;
			transform: translateX(0);
		}
		//
	`;

	const Title = styled.h1``;

	return (
		<>
			<Content>
				<div className='title'>
					<h1>Let's talk</h1>
					<h4>Ask me anything or just say hi..</h4>
				</div>
				<form>
					<div>
						<label for='fullname'>Full name:</label>
						<input
							type='text'
							id='fullname'
							name='fullname'
							required
							autocomplete='name'
						/>
					</div>

					<div>
						<label for='emailsend'>Email address:</label>
						<input
							type='email'
							id='emailsend'
							name='emailsend'
							required
							autocomplete='email'
						/>
					</div>

					<div>
						<label for='phone'>Phone number:</label>
						<input id='phone' name='phone' required autocomplete='tel' />
					</div>

					<div>
						<label for='message'>Message:</label>

						<textarea
							id='comment'
							name='comment'
							rows='4'
							cols='50'
							required
						></textarea>
					</div>

					<div id='error'></div>
					<div id='submit-button'>
						<button id='submit' class='link-container'>
							Submit
							<span class='link-arrow'>➔</span>
						</button>
					</div>
				</form>
			</Content>
		</>
	);
};

export default Contact;
