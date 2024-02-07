import {useColor} from '@/utils/hooks/useColor';
import {type Props} from './types.ts';
import {TooltipWrapper, Span, TooltipRoot, TooltipArrow, TooltipArrowContent} from './styled';
import {useTooltip} from './hooks.tsx';

/**
 * `Tooltip`
 */
const Tooltip = ({
	children,
	content,
	gap = 12,
	placement = 'top',
	themeColor = 'primary',
	isShowArrow = true,
	className,
}: Props) => {
	const {makeColor} = useColor();
	const color = makeColor({themeColor});
	const {handleOnMouseLeave, handleOnMouseOver, isVisible} = useTooltip();

	return (
		<TooltipRoot>
			<Span
				onMouseOver={handleOnMouseOver}
				onMouseLeave={handleOnMouseLeave}
			>
				{children}
			</Span>

			<TooltipWrapper
				$isVisible={isVisible}
				$placement={placement}
				$color={color}
				$gap={gap}
				className={className}
			>
				{content}
				{isShowArrow && (
					<TooltipArrow>
						<TooltipArrowContent/>
					</TooltipArrow>
				)}
			</TooltipWrapper>
		</TooltipRoot>
	);
};

export default Tooltip;
