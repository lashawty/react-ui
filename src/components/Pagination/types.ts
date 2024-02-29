import {type ThemeColor} from '@/components/types';
import {type ReactNode} from 'react';

export type PaginationParams = {
	page: number;
	pageSize: number;
	total: number;
	hasEllipsis?: boolean;
	onChange?: (value: number) => void;
};

export type Props = {
	themeColor?: ThemeColor;
	icons?: {
		prevIcon: ReactNode | string;
		nextIcon: ReactNode | string;
	};
} & PaginationParams;
