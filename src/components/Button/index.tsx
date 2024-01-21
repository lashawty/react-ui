import {StyledButton, StartIcon, EndIcon} from './styled';

// Import CircularProgress from '@material-ui/core/CircularProgress';
import {useColor} from '../../utils/hooks/useColor';
import {type Props} from './types.ts';

/**
 * `Button` 元件代表一個可點擊的按鈕，在使用者點擊之後會觸發相對應的業務邏輯。
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
	...props
}: Props) => {
	const {makeColor} = useColor();
	const $btnColor = makeColor({themeColor, isDisabled});

	return (
		<StyledButton
			type='button'
			className={className}
			$btnColor={$btnColor}
			$variant={variant}
			disabled={isDisabled}
			onClick={onClick}
			{...props}
		>
			<>
				{isLoading && (
				// <StyledCircularProgress
				//     $variant={variant}
				//     $color={btnColor}
				//     size={16}
				// />
					<p>temp isLoading</p>
				)}

				{startIcon && <StartIcon>{startIcon}</StartIcon>}
				<span>{children}</span>
				{endIcon && <EndIcon>{endIcon}</EndIcon>}
			</>
		</StyledButton>
	);
};

export default Button;
