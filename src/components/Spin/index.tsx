import {type Props} from './types';
import {SpinContainer, StyledSpin, Indicator, Mask} from './styled';
import {useColor} from '@/utils/hooks';
import {useRef} from 'react';
import {useSpin} from './hooks';

/**
 * `Spin`
*/
const Spin = ({
	themeColor = 'primary',
	customIndicator,
	isLoading = false,
	children,
}: Props) => {
	const {makeColor} = useColor();
	const color = makeColor({themeColor});
	const indicatorRef = useRef<HTMLDivElement>(null);
	const {indicatorSize} = useSpin(isLoading, indicatorRef);

	if (!children) {
		return (
			<StyledSpin $color={color}>
				{customIndicator}
			</StyledSpin>
		);
	}

	return (
		<SpinContainer $color={color}>
			{children}
			{isLoading && (
				<>
					<Mask />
					<Indicator
						ref={indicatorRef}
						$indicatorSize={indicatorSize}
					>
						{customIndicator}
					</Indicator>
				</>
			)}
		</SpinContainer>
	);
};

export default Spin;
