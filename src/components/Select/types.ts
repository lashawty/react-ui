export type Option = {
	name: string;
	code: string;
};

export type Props = {
	options: Option[];
	placeholder?: string;
	onSelect?: () => void;
};
