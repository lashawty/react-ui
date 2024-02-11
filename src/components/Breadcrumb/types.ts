import {type ReactNode} from 'react';

export type ChildrenList = {
	url?: string;
	children: ReactNode | string;
};

export type Props = {
	separator: string | ReactNode;
	collapsedElement?: string | ReactNode;
	maxItems?: number;
	childrenList: ChildrenList[];
};
