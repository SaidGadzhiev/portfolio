import { useEffect, useState } from 'react';

const useMobileSize = () => {
	const [isMobile, setIsMobile] = useState(window.innerWidth < 720);

	const handleResize = () => {
		if (window.innerWidth < 720) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}
	};

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return isMobile;
};

export default useMobileSize;
