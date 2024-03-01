import {useEffect, useState, type RefObject} from 'react';
import {type IndicatorSize} from './types';

export const useSpin = (isLoading: boolean, indicatorRef: RefObject<HTMLDivElement>) => {
	const [indicatorSize, setIndicatorSize] = useState<IndicatorSize>({
		width: 0,
		height: 0,
	});

	useEffect(() => {
		const indicatorElem = indicatorRef.current;
		if (indicatorElem) {
			setIndicatorSize({
				width: indicatorElem.clientWidth,
				height: indicatorElem.clientHeight,
			});
		}
	}, [indicatorRef, isLoading]);

	return {
		indicatorSize,
	};
};
