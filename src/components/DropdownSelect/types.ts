import {type ReactNode} from 'react';
import {type Placement} from './components/Dropdown/types';

export type Option = {
	name: string;
	code: string;
};

export type Props = {
	placement?: Placement;
	options: Option[];
	loadingChildren?: ReactNode;
	arrowChildren?: ReactNode;
	placeholder?: string;
	isDisabled?: boolean;
	isLoading?: boolean;
	onSelect?: () => void;
};
