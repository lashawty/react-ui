import {StyledGrid} from './styled.tsx';
import {type Props} from './types.ts';

/**
 * `Grid` layout component
 */
const Grid = ({
	column = 1,
	gap = 20,
	children,
}: Props) => (
	<StyledGrid $column={column} $gap={gap}>
		{children}
	</StyledGrid>
);

export default Grid;
