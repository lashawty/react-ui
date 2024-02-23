import {useToggleActive} from '@/utils/hooks';
import {useEffect} from 'react';

export const useDrawer = (isOpen: boolean, animationDuration: number) => {
	const {isActive, handleToggleActive} = useToggleActive(!isOpen);

	useEffect(() => {
		if (isOpen) {
			handleToggleActive(false);
		} else {
			setTimeout(() => {
				handleToggleActive(true);
			}, (animationDuration + 100));
		}
	}, [animationDuration, isOpen]);

	return {
		isActive,
	};
};
