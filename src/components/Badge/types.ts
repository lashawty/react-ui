import {type ThemeColor} from '@/components/types.ts';
import {type ReactNode} from 'react';

export type Placement = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

type Variant = 'standard' | 'dot';

export type Props = {
	className?: string;
	badgeContent?: number;
	themeColor?: ThemeColor;
	placement?: Placement;
	max?: number;
	variant?: Variant;
	isShowZero?: boolean;
	children: ReactNode;
};
