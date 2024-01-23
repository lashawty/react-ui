import styled, {css} from 'styled-components';

export const StyledRadioGroup = styled.div<{
	$columns: number;
	$isDisabled?: boolean;
}>`
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(${props => props.$columns}, 1fr);
  grid-gap: 8px;
  border: 1px solid #fff;
  border-radius: 10px;

  ${props => props.$isDisabled && css`
    cursor: not-allowed;
    pointer-events: none;
  `}
`;
