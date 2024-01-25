import styled from 'styled-components';

export const StyledGrid = styled.div<{
	$column: number;
	$gap: number;
}>`
  display: grid;
  gap: ${props => props.$gap}px;
  grid-template-columns: repeat(${props => props.$column}, 1fr);
  align-items: center;
  justify-items: center;
`;
