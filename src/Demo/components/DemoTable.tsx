import Table from '@/components/Table';
import {type TableTitle, type TableIndex} from '@/components/Table/types.ts';
import styled from 'styled-components';

const columns: TableTitle[] = [
	{
		dataIndex: 'name',
		title: 'Name',
		width: 130,
		isFixed: true,
	},
	{
		dataIndex: 'age',
		title: 'Age',
		width: 65,
	},
	{
		dataIndex: 'address',
		title: 'Address',
		width: '100%',
	},
];

const dataSource: TableIndex[] = [
	{
		address: 'New York No. 1 Lake Park',
		age: 32,
		name: 'John Brown',
	},
	{
		address: 'London No. 1 Lake Park',
		age: 42,
		name: 'Jim Green',
	},
	{
		address: 'Sidney No. 1 Lake Park',
		age: 32,
		name: 'Joe Black',
	},
];

export const DemoTable = () => (
	<div style={{width: '100%'}}>
		<Table columns={columns} dataSource={dataSource} />
		<div style={{maxWidth: '200px'}}>
			<Text>--- scroll right ➡ ---</Text>
			<Table columns={columns} dataSource={dataSource} />
		</div>
	</div>
);

const Text = styled.p`
	text-align: left;
	margin: 20px 0;
	color: #fff;
`;
