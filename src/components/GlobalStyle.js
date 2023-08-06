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
        background-color: #eeeff1;
        color: #212121;
        background-image: radial-gradient(#21212130 0.5px, transparent 1px);
        background-size:30px 30px;
    }

    .background {
  position:absolute;
  display:block;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0.5;
  }
    p{
        font-family: 'Montserrat', sans-serif;
    }

    h3{
        font-family: 'Montserrat', sans-serif;
    }


`;
export default GlobalStyle;
