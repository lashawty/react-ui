import {type ThemeColor} from '@/components/types.ts';
import {type ReactNode} from 'react';

export type Placement = 'top' | 'bottom' | 'left' | 'right';

export type Props = {
	className?: string;
	isShowArrow?: boolean;
	placement?: Placement;
	themeColor?: ThemeColor;
	gap?: number;
	content: ReactNode | string;
	children: ReactNode | string;
};
