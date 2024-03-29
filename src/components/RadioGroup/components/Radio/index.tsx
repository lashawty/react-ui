import {type Props} from './types.ts';
import {RadioRoot, Label, StyledRadio, Check} from './styled.tsx';

/**
 * Radio
 */
const Radio = ({
	isDisabled = false,
	isChecked = false,
	value,
	onClick,
	children = value,
	color,
}: Props) => (
	<RadioRoot onClick={onClick} $color={color} $isChecked={isChecked} $isDisabled={isDisabled}>
		<StyledRadio type='button' role='radio' value={value}>
			<Check />
		</StyledRadio>
		<Label>{children}</Label>
	</RadioRoot>
);

export default Radio;
