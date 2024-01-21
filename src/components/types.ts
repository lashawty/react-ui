// Common types

// eslint-disable-next-line @typescript-eslint/naming-convention
type RGB = `rgb(${number}, ${number}, ${number})`;
// eslint-disable-next-line @typescript-eslint/naming-convention
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
// eslint-disable-next-line @typescript-eslint/naming-convention
type HEX = `#${string}`;

export type Color = RGB | RGBA | HEX;

export type ThemeKey = 'primary' | 'secondary' | 'disable';
export type ThemeColor = ThemeKey | Color;

export type ThemeConfig = Record<ThemeKey, Color>;
