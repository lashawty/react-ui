import {useToggleActive, useLockBodyScroll} from '@/utils/hooks';
import {useEffect} from 'react';

export const useDrawer = (isOpen: boolean, animationDuration: number) => {
	const {isActive: isRemoveDom, handleToggleActive} = useToggleActive(!isOpen);
	useLockBodyScroll(isOpen);

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
		isRemoveDom,
	};
};
