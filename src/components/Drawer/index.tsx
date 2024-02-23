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
	const {isRemoveDom} = useDrawer(isOpen, animationDuration);

	return !isRemoveDom && (
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
