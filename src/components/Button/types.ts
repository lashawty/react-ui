import {type ReactNode} from 'react';
import {type ThemeColor} from '@/components/types.ts';

export type Variant = 'contained' | 'outlined' | 'text';

export type Props = {
	variant?: Variant;
	className?: string;
	children?: ReactNode;
	themeColor?: ThemeColor;
	isLoading?: boolean;
	isDisabled?: boolean;
	startIcon?: ReactNode;
	endIcon?: ReactNode;
	onClick?: () => void;
};
