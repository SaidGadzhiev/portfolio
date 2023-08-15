import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
	const [isDarkTheme, setIsDarkTheme] = useState(
		//if page refresh, local storage checks which theme was selected prior to
		//refresh. Making sure the user stays with the same theme
		localStorage.getItem('theme') === 'true'
	);

	const toggleTheme = () => {
		const newTheme = !isDarkTheme;
		//update the value of isDarkTheme to opposite of its current result
		setIsDarkTheme(newTheme);
		localStorage.setItem('theme', newTheme.toString());
	};

	useEffect(() => {
		const currentTheme = localStorage.getItem('theme') === 'true';
		//taking the current theme from local storage and setting the theme State
		//to the current theme
		setIsDarkTheme(currentTheme);
	}, []);

	return (
		<ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
