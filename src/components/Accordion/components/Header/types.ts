import {type ReactNode} from 'react';

export type Props = {
	onClick?: () => void;
	header: ReactNode | string;
};
