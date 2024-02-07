import {useColor} from '@/utils/hooks/useColor';
import {type Props} from './types.ts';
import {BadgeWrapper, DotBadge, StandardBadge} from './styled.tsx';

/**
 * `Badge`
*/
const Badge = ({
	children,
	badgeContent = 0,
	themeColor = '#F85149',
	placement = 'top-right',
	variant = 'standard',
	max = 99,
	isShowZero = false,
	...props
}: Props) => {
	const {makeColor} = useColor();
	const color = makeColor({themeColor});

	const makeBadgeContent = () => {
		if (isShowZero && badgeContent === 0) {
			return '0';
		}

		if (!isShowZero && badgeContent === 0) {
			return null;
		}

		return badgeContent > max ? `${max}+` : badgeContent;
	};

	const content = makeBadgeContent();

	return (
		<BadgeWrapper
			$color={color}
			$placement={placement}
			{...props}
		>
			{children}
			{variant === 'dot' && (
				<DotBadge/>
			)}
			{variant === 'standard' && content && (
				<StandardBadge>
					{content}
				</StandardBadge>
			)}
		</BadgeWrapper>
	);
};

export default Badge;
