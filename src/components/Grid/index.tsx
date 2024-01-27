import {StyledGrid} from './styled.tsx';
import {type Props} from './types.ts';

/**
 * `Grid` layout component
 */
const Grid = ({
	column = 4,
	columnMobile = 2,
	gap = 20,
	children,
}: Props) => (
	<StyledGrid $column={column} $gap={gap} $columnMobile={columnMobile}>
		{children}
	</StyledGrid>
);

export default Grid;
