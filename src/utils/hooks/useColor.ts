import {type Color, type ThemeColor, type ThemeConfig, type ThemeKey} from '@/components/types.ts';

import {useTheme} from 'styled-components';

type Config = {
	themeColor: ThemeColor;
	isDisabled?: boolean;
};

type MakeColor = {
	makeColor: ({themeColor, isDisabled}: Config) => Color;
};

export const useColor = (): MakeColor => {
	const theme = useTheme() as ThemeConfig;

	const makeColor = ({themeColor, isDisabled = false}: Config): Color => {
		const color = theme[themeColor as ThemeKey] || themeColor as ThemeColor;
		return isDisabled
			? theme.disable
			: color;
	};

	return {
		makeColor,
	};
};
