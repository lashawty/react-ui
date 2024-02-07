import {useState} from 'react';

export const useTooltip = () => {
	const [isVisible, setIsVisible] = useState(false);

	return {
		handleOnMouseOver() {
			setIsVisible(true);
		},
		handleOnMouseLeave() {
			setIsVisible(false);
		},
		isVisible,
	};
};
