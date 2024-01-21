import {type ThemeColor} from '../../types.ts';

export type Size = 'default' | 'small';

export type Props = {
	/**
     * 開啟狀態的內容。若設置，則由外部參數控制；若不設置，則由內部 state 控制
     */
	isChecked?: boolean;
	/**
     * 禁用狀態
     */
	isDisabled?: boolean;
	/**
     * 主題配色，primary、secondary 或是自己傳入色票
     */
	themeColor?: ThemeColor;
	/**
     * 狀態改變的 callback function
     */
	onChange?: () => void;
	/**
     * 開關大小
     */
	size?: Size;
	/**
     * 開啟狀態的內容
     */
	checkedChildren?: string;
	/**
     * 關閉狀態的內容
     */
	unCheckedChildren?: string;
};
