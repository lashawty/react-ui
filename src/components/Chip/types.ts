import {type ThemeColor} from '@/components/types.ts';
import {type ReactNode} from 'react';

export type Variant = 'contained' | 'outlined';

export type Props = {
	className?: string;
	variant?: Variant;
	label: ReactNode | string;
	themeColor?: ThemeColor;
	icon?: ReactNode;
	deleteIcon?: ReactNode;
	onDelete?: () => void;
};
