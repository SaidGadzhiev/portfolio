import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`




  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');

  *{
    margin: 0;
  padding: 0;
  }
  body{
        font-family: 'Poppins', sans-serif;
        padding: 30px;
        background-color: 
        ${({ isDarkTheme }) => (isDarkTheme ? '#212121' : '#eeeff1')};
;
        color: #212121;
        background-image: ${(props) =>
					props.homepageActive
						? ({ isDarkTheme }) =>
								isDarkTheme
									? 'radial-gradient(#ffffff1f 0.5px, transparent 1px)'
									: 'radial-gradient(#21212130 0.5px, transparent 1px)'
						: 'none'};
        background-size:30px 30px;
        overflow-x: hidden;
		transition: 0.5s ease-in-out;
    }

    

    .background {
  position:absolute;
  display:block;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0.5;
  }
   

    h1{
      font-size: 35px;
      color: ${({ isDarkTheme }) => (isDarkTheme ? '#eeeff1' : '#212121')};
    }
    h2{
      font-size: 22pt;
      color: ${({ isDarkTheme }) => (isDarkTheme ? '#eeeff1' : '#212121')};

    }
    h3{
      font-size: 19px;
        font-family: 'Montserrat', sans-serif;
        color: #34c483;
    }
    h4{
      font-size: 16px;
      color: #34c483;
    }
p{
 color:  ${({ isDarkTheme }) => (isDarkTheme ? '#eeeff1' : '#212121')};
}

    a{
      font-family: 'Montserrat', sans-serif;
      color: ${({ isDarkTheme }) => (isDarkTheme ? '#eeeff1' : '#212121')};
    }


    //button styling, NOT NAV BUTTONS
    .link-container {
			border: ${({ isDarkTheme }) =>
				isDarkTheme ? '2px solid #eeeff1' : '2px solid #212121'};;
			align-items: center;
			border-radius: 5px;
			width: 120px;
			height: 40px;
			padding-top: 15px;
			padding-left: 10px;
			text-align: center;
			display: inline-block;
			color: ${({ isDarkTheme }) => (isDarkTheme ? '#eeeff1' : '#212121')};
			text-decoration: none;
			position: relative;
			overflow: hidden;
			transition: transform 0.3s ease-in-out;
			font-weight: bold;
			font-size: 18px;
			float: none;
			@media (min-width: 768px) {
				float: left;
			}
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

		form label{
			color: ${({ isDarkTheme }) => (isDarkTheme ? '#eeeff1' : '#212121')};
		}

		button{
			background-color: ${({ isDarkTheme }) => (isDarkTheme ? '#212121' : '#eeeff1')};
;
		}

		

    


`;
export default GlobalStyle;
