import {type ReactNode} from 'react';

export type ArrowConfig = {
	isVisible?: boolean;
	leftArrow?: ReactNode | string;
	rightArrow?: ReactNode | string;
};

export type CarouselSize = {
	width: number;
	height: number;
};

export type Props = {
	className?: string;
	dataSource?: ReactNode[];
	hasDots?: boolean;
	arrowConfig: ArrowConfig;
	autoplay?: boolean;
	size: CarouselSize;
};
