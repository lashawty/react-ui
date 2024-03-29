import {Th, Td, TableRoot} from './styled.tsx';
import {type Props} from './types.ts';

/**
 * `Table`
 */
const Table = ({
	className,
	columns,
	dataSource,
}: Props) => (
	<TableRoot className={className}>
		<table>
			<thead>
				<tr>
					{
						columns.map((column, index) => (
							<Th
								key={index}
								$width={column.width}
								$isFixed={Boolean(column.isFixed)}
							>
								{column.title}
							</Th>
						))
					}
				</tr>
			</thead>
			<tbody>
				{
					dataSource.map((data, index) => (
						<tr key={index}>
							{
								columns.map((column, index) => {
									const {dataIndex} = column;

									return (
										<Td key={index} $isFixed={Boolean(column.isFixed)}>
											{data[dataIndex]}
										</Td>
									);
								})
							}
						</tr>
					))
				}
			</tbody>
		</table>
	</TableRoot>
);

export default Table;
