import {type Color} from '@/components/types';
import {type ReactNode} from 'react';

export type TabWidth = {
	width: number;
	left: number;
};

export type Props = {
	isActive: boolean;
	label: ReactNode;
	color: Color;
	handleClickTab: () => void;
	handleActiveTab: (tabWdith: TabWidth) => void;
};
