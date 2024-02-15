import {useState} from 'react';

export const useToggleActive = (defaultIsActive = false) => {
	const [isActive, setIsActive] = useState(defaultIsActive);

	const handleToggleActive = (state: boolean) => {
		setIsActive(state);
	};

	return {
		isActive,
		handleToggleActive,
	};
};
