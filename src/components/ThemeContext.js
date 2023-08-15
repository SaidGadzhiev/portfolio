import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
	const [isDarkTheme, setIsDarkTheme] = useState(false);

	const toggleTheme = () => {
		//update the value of isDarkTheme to opposite of its current result
		setIsDarkTheme((prev) => !prev);
	};

	return (
		<ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
