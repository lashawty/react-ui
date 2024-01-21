import {type Color, type ThemeColor} from '../../types.ts';

import {useTheme} from 'styled-components';

type Config = {
	themeColor: ThemeColor;
	isDisabled: boolean;
};

type MakeColor = {
	makeColor: ({themeColor, isDisabled}: Config) => Color;
};

export const useColor = (): MakeColor => {
    // Temp

	// const theme = useTheme();
	// const makeColor = ({themeColor, isDisabled}: config): Color => {
	// 	// Const madeColor = theme.color[themeColor] || themeColor;
	// 	const madeColor = themeColor;
	// 	return isDisabled
	// 		? theme.color.disable
	// 		: madeColor;
	// };

	return {
		makeColor: () => '#556b2f',
	};
};
