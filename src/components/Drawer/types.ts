import {type ReactNode} from 'react';

export type Placement = 'top' | 'left' | 'bottom' | 'right';

export type Props = {
	placement?: Placement;
	isOpen?: boolean;
	onClose?: () => void;
	animationDuration?: number;
	children: ReactNode;
};
