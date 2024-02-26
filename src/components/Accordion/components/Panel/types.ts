import {type ReactNode} from 'react';

export type Props = {
	isExpand?: boolean;
	panel?: ReactNode | string;
	extraHeight?: number;
};
