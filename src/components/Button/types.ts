import {ReactNode} from 'react';
import {ThemeColor} from '../../types.ts';

export type Variant = 'contained' | 'outlined' | 'text'


export interface Props {
    /**
     * 設置按鈕類型 button types
     */
    variant?: Variant
    /**
     * 客製化樣式 custom style(not recommend)
     */
    className?: string
    /**
     * 內容 content
     */
    children?: ReactNode
    /**
     * 主題配色，primary、secondary 或是自己傳入色票
     */
    themeColor?: ThemeColor
    /**
     * 載入中狀態
     */
    isLoading?: boolean
    /**
     * 禁用狀態
     */
    isDisabled?: boolean
    /**
     * 設置按鈕左方圖示
     */
    startIcon?: ReactNode
    /**
     * 設置按鈕右方圖示
     */
    endIcon?: ReactNode
    /**
     * 點擊事件
     */
    onClick?: () => void,
}