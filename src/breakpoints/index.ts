type Key = 'sm' | 'md' | 'lg' | 'xl';
type Breakpoints = 575 | 768 | 1024 | 1400;
type MediaQuery = `@media (min-width: ${Breakpoints}px)`;

const breakpoints: Record<Key, Breakpoints> = {
	sm: 575,
	md: 768,
	lg: 1024,
	xl: 1400,
};

const formatBreakpoints = (breakpoints: Breakpoints): MediaQuery => `@media (min-width: ${breakpoints}px)`;

export const media: Record<Key, MediaQuery> = {
	sm: formatBreakpoints(breakpoints.sm),
	md: formatBreakpoints(breakpoints.md),
	lg: formatBreakpoints(breakpoints.lg),
	xl: formatBreakpoints(breakpoints.xl),
};

