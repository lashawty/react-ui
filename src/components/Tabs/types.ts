import {type ThemeColor} from '@/components/types';

export type Props = {
	className?: string;
	options: string[];
	themeColor?: ThemeColor;
	onChange?: (value: string) => void;
};
