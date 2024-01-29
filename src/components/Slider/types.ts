import {type ThemeColor} from '@/components/types.ts';
import {type ChangeEvent} from 'react';

export type Props = {
	defaultValue?: number;
	min?: number;
	max?: number;
	step?: number;
	themeColor?: ThemeColor;
	onChange?: (event: ChangeEvent) => void;
	isDisabled?: boolean;
};

