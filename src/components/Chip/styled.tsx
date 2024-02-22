import styled, {css} from 'styled-components';
import {type Variant} from './types';
import {type Color} from '@/components/types.ts';

const containedStyle = css<{
	$color: Color;
}>`
  background: ${props => props.$color};
  color: #FFF;
`;

const outlinedStyle = css<{
	$color: Color;
}>`
  background: #FFF;
  color: ${props => props.$color};
`;

const variantMap = {
	contained: containedStyle,
	outlined: outlinedStyle,
};

export const StyledChip = styled.div<{
	$color: Color;
	$variant: Variant;
}>`
  padding: 5px;
  display: inline-flex;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 50px;
  border: 1px solid ${({$color}) => $color};
  width: 120px;
  ${({$variant}) => variantMap[$variant] || variantMap.contained}
`;

export const Label = styled.span`
`;

export const DeleteButton = styled.button`
  padding: 0;
  outline: none;
  background: none;
  border: none;
  width: auto;
  height: auto;
  line-height: 0;
`;
