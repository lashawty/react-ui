import {useLayoutEffect} from 'react';

export const useLockBodyScroll = (isLock: boolean) => {
	useLayoutEffect(() => {
		if (!isLock) {
			return;
		}

		const originalStyle = window.getComputedStyle(document.body).overflow;
		document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = originalStyle;
		};
	}, [isLock]);
};
