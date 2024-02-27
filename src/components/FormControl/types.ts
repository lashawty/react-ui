import {type ReactNode} from 'react';

export type Placement = 'top' | 'left' | 'right' | 'bottom';

export type Props = {
	className?: string;
	isRequired?: boolean;
	isError?: boolean;
	errorMessage?: string;
	placement?: Placement;
	label?: ReactNode | string;
	onChange?: (value: string) => void;
	children: ReactNode;
};
