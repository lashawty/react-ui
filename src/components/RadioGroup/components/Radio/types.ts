import {type ReactNode} from 'react';
import {type Value} from '../../types';
import {type Color} from '@/components/types.ts';
export type Props = {
	isChecked?: boolean;
	isDisabled?: boolean;
	onClick?: () => void;
	value?: Value;
	children?: ReactNode;
	color: Color;
};
