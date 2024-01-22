import {type ReactNode} from 'react';
import {type ThemeColor} from '@/components/types.ts';

export type Props = {
	/**
	 * 開啟或關閉
	 */
	isChecked?: boolean;
	/**
	 * 是否禁用
	 */
	isDisabled?: boolean;
	/**
	 * 主題配色，primary、secondary 或是自己傳入色票
	 */
	themeColor?: ThemeColor;
	/**
	 * 點擊事件
	 */
	onClick?: () => void;
	/**
	 * 在 RadioGroup 中用來幫助判斷是否被選中
	 */
	value?: string;
	/**
	 * 內容
	 */
	children?: ReactNode;
};
