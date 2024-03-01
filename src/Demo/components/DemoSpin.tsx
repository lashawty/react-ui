import Spin from '@/components/Spin';
import {DemoCarousel} from './DemoCarousel';
import {useToggleActive} from '@/utils/hooks';
import Button from '@/components/Button';
import styled from 'styled-components';
import {CircularProgress} from '@mui/material';

const Wrapper = styled.div`
  padding: 50px;
  background: #fff;
  width: 100%;
`;

const ButtonWrapper = styled.div`
  margin: 0 auto;
  max-width: 500px;
`;

export const DemoSpin = () => {
	const {isActive: isLoading, handleToggleActive} = useToggleActive(true);
	const handleOnClick = () => {
		handleToggleActive(!isLoading);
	};

	return (
		<Wrapper>
			<ButtonWrapper>
				<Button onClick={handleOnClick}>Toggle Loading State</Button>
			</ButtonWrapper>
			<Spin
				customIndicator={<CircularProgress size={30}/>}
				isLoading={isLoading}
				themeColor='#262626'
			>
				<DemoCarousel />
			</Spin>
		</Wrapper>
	);
};
