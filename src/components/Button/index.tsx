import {StyledButton, StartIcon, EndIcon} from './styled';

import {useColor} from '@/utils/hooks/useColor';
import {type Props} from './types.ts';

/**
 * `Button`
 */
const Button = ({
	className,
	children,
	themeColor = 'primary',
	variant = 'contained',
	isLoading = false,
	isDisabled = false,
	startIcon = null,
	endIcon = null,
	onClick,
	type = 'button',
}: Props) => {
	const {makeColor} = useColor();
	const $btnColor = makeColor({themeColor, isDisabled});

	return (
		<StyledButton
			type={type}
			className={className}
			$btnColor={$btnColor}
			$variant={variant}
			$isLoading={isLoading}
			disabled={isDisabled}
			onClick={onClick}
		>
			<>
				{/* custom your loading style */}
				{isLoading && (
					<p>isLoading...</p>
				)}

				{startIcon && <StartIcon>{startIcon}</StartIcon>}
				<span>{children}</span>
				{endIcon && <EndIcon>{endIcon}</EndIcon>}
			</>
		</StyledButton>
	);
};

export default Button;
