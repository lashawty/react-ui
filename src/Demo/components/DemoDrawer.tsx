import Drawer from '@/components/Drawer';
import Button from '@/components/Button';
import {DemoCarousel} from './DemoCarousel';
import {useToggleActive} from '@/utils/hooks';
import styled from 'styled-components';
import {flexCenter} from '@/utils/commonStyle';

const Wrapper = styled.div<{$gap: number}>`
  padding: 50px;
  ${flexCenter}
  flex-direction: column;
`;

const ButtonWrapper = styled.div`
  width: fit-content;
`;

export const DemoDrawer = () => {
	const {isActive, handleToggleActive} = useToggleActive(false);
	const handleOnClick = () => {
		handleToggleActive(!isActive);
	};

	return (
		<div>
			<Button onClick={handleOnClick}>Open Drawer</Button>
			<Drawer isOpen={isActive} onClose={handleOnClick}>
				<Wrapper $gap={50}>
					<ButtonWrapper>
						<Button onClick={handleOnClick}>Close Drawer</Button>
					</ButtonWrapper>
					<DemoCarousel />
				</Wrapper>
			</Drawer>
		</div>
	);
};
