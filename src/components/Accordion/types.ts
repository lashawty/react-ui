import {type ReactNode} from 'react';

export type Props = {
	className?: string;
	isExpand: boolean;
	onClick: () => void;
	header: string | ReactNode;
	children: string | ReactNode;
};
