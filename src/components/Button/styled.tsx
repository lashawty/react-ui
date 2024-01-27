import styled, {css, type RuleSet} from 'styled-components';
import {type Variant} from './types.ts';

type BtnColor = {
	$btnColor: string;
};

export const containedStyle = css<BtnColor>`
  color: #FFF;
  background: ${props => props.$btnColor};
	
	&:hover {
		opacity: .7;
	}
`;

export const outlinedStyle = css<BtnColor>`
  color: ${props => props.$btnColor};
  background: transparent;
  border: 3px solid ${props => props.$btnColor};

	&:hover {
		opacity: .7;
	}
`;

export const textStyle = css<BtnColor>`
  color: ${props => props.$btnColor};
  background: transparent;
  
  &:hover {
    background: ${props => `${props.$btnColor}`};
  	color: #fff;
  }
`;

export const disabledStyle = css`
  cursor: not-allowed;
  
  &:hover, &:active {
    opacity: 1;
  }
`;

const loadingStyled = css`
	cursor: wait;
	
	&:hover, &:active {
		opacity: 1;
	}
`;

export const variantMap: Record<Variant, RuleSet<BtnColor>> = {
	contained: containedStyle,
	outlined: outlinedStyle,
	text: textStyle,
};

export const StartIcon = styled.span`
  margin-right: 8px;
`;

export const EndIcon = styled.span`
  margin-left: 8px;
`;

export const StyledButton = styled.button<{
	$variant: Variant;
	$btnColor: string;
	$isLoading: boolean;
}>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  
  border: none;
  border-radius: 4px;
  outline: none;
  
  min-width: 100px;
  width: 100%;
  height: 36px;
  
  transition: color 0.2s, background-color 0.2s, border 0.2s, opacity 0.2s ease-in-out;
  cursor: pointer;
  
  ${props => variantMap[props.$variant]}
  
  
  &:active {
    opacity: 0.7;
  }
  
  &:disabled {
    ${disabledStyle}
  }
	
  ${props => props.$isLoading && loadingStyled}
	
`;
