import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import Homepage from './components/Homepage';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Header from './components/Header';
import { useState } from 'react';

import GlobalStyle from './components/GlobalStyle';
import Footer from './components/Footer';
import Projects from './components/Projects';
import { useTheme } from './components/ThemeContext';

function App() {
	const [homepageActive, setHomepageActive] = useState(false);
	const { isDarkTheme } = useTheme();

	return (
		<>
			<Router>
				<GlobalStyle
					homepageActive={homepageActive}
					isDarkTheme={isDarkTheme}
				/>
				<Header />

				<Routes>
					<Route
						path='/'
						element={<Homepage setHomepageActive={setHomepageActive} />}
					></Route>
					<Route path='/aboutme' element={<AboutMe />}></Route>
					<Route path='/projects' element={<Projects />}></Route>
					<Route path='/contact' element={<Contact />}></Route>
				</Routes>
				{!homepageActive ? <Footer /> : null}
			</Router>
		</>
	);
}

export default App;
