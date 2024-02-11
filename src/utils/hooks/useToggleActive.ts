import {useState} from 'react';

export const useToggleActive = (defaultIsActive = false) => {
	const [isActive, setIsActive] = useState(defaultIsActive);

	const handleToggleActive = () => {
		setIsActive(!isActive);
	};

	return {
		isActive,
		handleToggleActive,
	};
};
