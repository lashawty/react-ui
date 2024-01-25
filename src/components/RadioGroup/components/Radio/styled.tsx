import styled, {css} from 'styled-components';
import {type Color} from '@/components/types.ts';

export const Check = styled.span`
  border-radius: 100%;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

export const StyledRadio = styled.button`
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;
  border-radius: 100%;
  border: 1px solid #fff;

  width: 15px;
  aspect-ratio: 1;
  pointer-events: none;
  
`;

export const Label = styled.label`
  pointer-events: none;
`;

export const RadioRoot = styled.div<{
	$isDisabled?: boolean;
	$color: Color;
	$isChecked: boolean;
}>`
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${props => props.$color};
  cursor: pointer;
  
  ${Check} {
    background: ${props => props.$isChecked ? props.$color : ''};
  }

  ${props => props.$isDisabled && css`
    cursor: not-allowed;
    pointer-events: none;
  `}
  
`;
