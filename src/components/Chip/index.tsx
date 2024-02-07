import {useColor} from '@/utils/hooks/useColor';
import {type Props} from './types.ts';
import {StyledChip, Label, DeleteButton} from './styled.tsx';
import {useState} from 'react';

/**
 * `Chip`
 */
const Chip = ({
	className,
	variant = 'contained',
	label,
	themeColor = 'primary',
	icon,
	deleteIcon,
	onDelete,
}: Props) => {
	const {makeColor} = useColor();
	const color = makeColor({themeColor});
	const [isVisible, setIsVisible] = useState(true);

	const handleOnDelete = () => {
		setIsVisible(false);
		if (onDelete) {
			onDelete();
		}
	};

	if (isVisible) {
		return (
			<StyledChip
				className={className}
				$variant={variant}
				$color={color}
			>
				{icon}
				<Label>{label}</Label>
				{deleteIcon && <DeleteButton onClick={handleOnDelete}>
					{deleteIcon}
				</DeleteButton>}

			</StyledChip>
		);
	}

	return null;
};

export default Chip;
