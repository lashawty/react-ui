import styled from 'styled-components';

export const StyledRadioGroup = styled.div<{
	$columns: number;
}>`
  display: grid;
  grid-template-columns: repeat(${props => props.$columns}, 1fr);
  grid-gap: 8px;
`;
