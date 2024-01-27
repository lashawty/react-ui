import {type ReactNode} from 'react';
import {type ThemeColor} from '@/components/types.ts';

export type Props = {
	className?: string;
	placeholder?: string;
	themeColor?: ThemeColor;
	prefix?: ReactNode;
	suffix?: ReactNode;
	isError?: boolean;
	isDisabled?: boolean;
	onChange?: () => void;
};
