import {type Props} from './types.ts';
import {OverlayWrapper, DropdownWrapper, DropdownButton} from './styled.tsx';
import {useToggleActive} from '@/utils/hooks';

/**
 * `Dropdown`
 */
const Dropdown = ({
	children,
	placement = 'bottom',
	overlay,
	onClick,
}: Props) => {
	const {isActive, handleToggleActive} = useToggleActive(false);
	const handleOnClick = () => {
		handleToggleActive();

		if (onClick) {
			onClick();
		}
	};

	return (
		<DropdownWrapper>
			<DropdownButton onClick={handleOnClick}>
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
};

export default Dropdown;
