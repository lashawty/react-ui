import {type ThemeColor} from '@/components/types.ts';
import {type ReactNode} from 'react';

export type Hooks = {
	defaultValue?: number;
	character?: string | ReactNode;
	isDisabled?: boolean;
	onChange?: () => void;
};

export type Props = {
	count?: number;
	size?: number;
	allowHalf?: boolean;
	themeColor?: ThemeColor;
} & Hooks;

