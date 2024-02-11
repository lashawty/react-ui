import {type ReactNode} from 'react';

export type Placement = 'top' | 'bottom';

export type Props = {
	placement?: Placement;
	onClick?: () => void;
	overlay: ReactNode | string;
	children: ReactNode | string;
};
