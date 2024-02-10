## Usage
```tsx
import Table from '@/components/Table';
import {type TableTitle, type TableIndex} from '@/components/Table/types.ts';

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

<Table columns={columns} dataSource={dataSource} />
```