import Dropdown from '@/components/Dropdown';
import Button from '@/components/Button';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const Overlay = styled.p`
  padding: 10px;
`;

const overlay = (<Overlay>dropdown</Overlay>);

export const DemoDropdown = () => (
	<Wrapper>
		<Dropdown overlay={overlay}>
			<Button>Click Me</Button>
		</Dropdown>
		<Dropdown overlay={overlay} placement='top'>
			<Button themeColor='secondary'>Click Me</Button>
		</Dropdown>
	</Wrapper>
);
