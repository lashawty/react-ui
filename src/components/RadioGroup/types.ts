import {type ReactNode} from 'react';

export type Props = {
	columns?: number;
	/**
     * Selected value
     */
	value?: string | number;
	/**
     * Children of RadioGroup
     */
	children?: ReactNode;
	/**
     * Callback when event on change
     */
	onChange?: () => void;
};
