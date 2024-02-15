import {type Props} from './types.ts';
import {OverlayWrapper, DropdownWrapper, DropdownButton} from './styled.tsx';

/**
 * `Dropdown`
 */
const Dropdown = ({
	children,
	placement = 'bottom',
	overlay,
	onClick,
	isActive,
}: Props) => (
	<DropdownWrapper>
		<DropdownButton onClick={onClick}>
			{children}
		</DropdownButton>

		<OverlayWrapper
			$isOpen={isActive}
			$placement={placement}
			$gap={12}
		>
			{overlay}
		</OverlayWrapper>
	</DropdownWrapper>
);

export default Dropdown;
