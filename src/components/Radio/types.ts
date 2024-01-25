import {type ReactNode} from 'react';
import {type ThemeColor} from '@/components/types.ts';

export type Props = {
	isChecked?: boolean;
	isDisabled?: boolean;
	themeColor?: ThemeColor;
	onClick?: () => void;
	value?: string;
	children?: ReactNode;
};
