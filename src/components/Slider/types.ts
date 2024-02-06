import {type ThemeColor} from '@/components/types.ts';

export type Props = {
	defaultValue?: number;
	min?: number;
	max?: number;
	step?: number;
	themeColor?: ThemeColor;
	onChange?: () => void;
	isDisabled?: boolean;
};

