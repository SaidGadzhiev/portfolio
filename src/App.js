import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import Homepage from './components/Homepage';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Projects';
import Contact from './components/Contact';
import Header from './components/Header';
import { useState } from 'react';

import GlobalStyle from './components/GlobalStyle';
import { isDOMComponent } from 'react-dom/test-utils';

function App() {
	const [homepageActive, setHomepageActive] = useState(false);

	return (
		<Router>
			<GlobalStyle homepageActive={homepageActive} />
			<Header />

			<Routes>
				<Route
					path='/'
					element={<Homepage setHomepageActive={setHomepageActive} />}
				></Route>
				<Route path='/aboutme' element={<AboutMe />}></Route>
				<Route path='/portfolio' element={<Portfolio />}></Route>
				<Route path='/contact' element={<Contact />}></Route>
			</Routes>
		</Router>
	);
}

export default App;
