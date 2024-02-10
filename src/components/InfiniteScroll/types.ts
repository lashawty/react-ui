import {type ReactNode} from 'react';

export type Props = {
	height: number;
	children: ReactNode;
	loadingIcon: ReactNode;
	onScrollBottom: () => void;
};
