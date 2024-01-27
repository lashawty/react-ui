import {type HTMLInputTypeAttribute} from 'react';
import {type ThemeColor} from '@/components/types.ts';

export type Props = {
	type?: HTMLInputTypeAttribute;
	placeholder?: string;
	themeColor?: ThemeColor;
	isDisabled?: boolean;
};
