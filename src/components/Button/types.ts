import {ReactNode} from 'react';

export interface Props {
    /**
     * 設置按鈕類型
     */
    variant?: 'contained' | 'outlined' | 'text'
    /**
     * 客製化樣式
     */
    className?: string
    /**
     * 內容
     */
    children?: ReactNode
    /**
     * 主題配色，primary、secondary 或是自己傳入色票
     */
    themeColor?: 'primary' | 'secondary'
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