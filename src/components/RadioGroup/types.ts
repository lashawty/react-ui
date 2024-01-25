import {type ThemeColor} from '@/components/types';

export type Value = string | number;

export type Radio = {
	value: Value;
};

export type Props = {
	columns?: number;
	value?: string | number;
	radios?: Radio[];
	onChange?: () => void;
	themeColor?: ThemeColor;
	isDisabled?: boolean;
};

