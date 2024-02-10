export type TableIndex = {
	name: string;
	age: number;
	address: string;
};

export type TableTitle = {
	dataIndex: keyof TableIndex;
	title: string;
	width: number | string;
	isFixed?: boolean;
};

export type Props = {
	className?: string;
	columns: TableTitle[];
	dataSource: TableIndex[];
};
