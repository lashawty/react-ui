/* eslint-disable @typescript-eslint/naming-convention */

/*
Common types
 */

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

export type Color = RGB | RGBA | HEX;

export type ThemeKey = 'primary' | 'secondary' | 'disable';
export type ThemeColor = ThemeKey | Color;

export type ThemeConfig = Record<ThemeKey, Color>;
