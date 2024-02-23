import {type Props} from './types';
import {Wrapper, Mask, DrawerWrapper} from './styled';
import {useDrawer} from './hooks';

/**
 * `Drawer`
 */
const Drawer = ({
	children,
	isOpen = false,
	placement = 'bottom',
	onClose,
	animationDuration = 200,
}: Props) => {
	const {isActive} = useDrawer(isOpen, animationDuration);

	return !isActive && (
		<Wrapper>
			<Mask
				$isOpen={isOpen}
				$animationDuration={animationDuration}
				onClick={onClose}
			/>
			<DrawerWrapper
				$isOpen={isOpen}
				$placement={placement}
				$animationDuration={animationDuration}
			>
				{children}
			</DrawerWrapper>
		</Wrapper>
	);
};

export default Drawer;
