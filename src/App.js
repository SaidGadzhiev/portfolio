import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import Homepage from './components/Homepage';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Header from './components/Header';
import Particles from 'particles.js';
import { useEffect } from 'react';

function App() {
	return (
		<Router>
			<Header />

			<Routes>
				<Route path='/' element={<Homepage />}></Route>
				<Route path='/aboutme' element={<AboutMe />}></Route>
				<Route path='/portfolio' element={<Portfolio />}></Route>
				<Route path='/contact' element={<Contact />}></Route>
			</Routes>
		</Router>
	);
}

export default App;
