import styled, {css} from 'styled-components';
import {type Color} from '@/components/types.ts';

export const StyledRadio = styled.span<{
	$color: Color;
	$isChecked: boolean;
}>`
  box-sizing: border-box;
  width: 15px;
  aspect-ratio: 1;
  border-radius: 100%;
  border: 1px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  
  &:before {
    content: '';
    display: block;
    border-radius: 100%;
    background: ${props => props.$isChecked ? props.$color : ''};
    width: 100%;
    height: 100%;
  }
`;

export const RadioValue = styled.span<{
	$color: Color;
}>`
  color: ${props => props.$color};
`;

export const RadioRoot = styled.div<{
	$isDisabled?: boolean;
}>`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  
  ${props => props.$isDisabled && css`
    cursor: not-allowed;
    pointer-events: none;
  `}
  
`;
