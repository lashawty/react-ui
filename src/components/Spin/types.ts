import {type ReactNode} from 'react';
import {type ThemeColor} from '@/components/types';

export type IndicatorSize = {
	width: number;
	height: number;
};

export type Props = {
	themeColor?: ThemeColor;
	className?: string;
	customIndicator: ReactNode | string;
	isLoading?: boolean;
	children?: ReactNode | string;
};
