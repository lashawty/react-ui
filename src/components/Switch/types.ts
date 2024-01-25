import {type ThemeColor} from '@/components/types.ts';

export type Size = 'default' | 'small';

export type Props = {
	isChecked?: boolean;
	isDisabled?: boolean;
	themeColor?: ThemeColor;
	onChange?: () => void;
	size?: Size;
};
