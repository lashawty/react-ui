import {type Props} from './types.ts';
import {StyledRadioGroup} from './styled';

const RadioGroup = ({
	children,
	columns = 1,
}: Props) => (
	<StyledRadioGroup
		$columns={columns || 1}
	>
		{children}
	</StyledRadioGroup>
);

export default RadioGroup;
