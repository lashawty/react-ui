import styled, {css} from 'styled-components';
import {flexCenter} from '@/utils/commonStyle';
import {type Color} from '@/components/types';

const buttonStyle = css<{$gap?: number}>`
  ${flexCenter}
  width: 32px;
  height: 32px;
  border-radius: 100%;
  cursor: pointer;
  transition: background 0.2s ease-in-out;

  &:hover {
    transition: background 0.2s ease-in-out;
  }
`;

const disabledButtonStyle = css`
  background: none;
  cursor: default;
  &:hover {
    background: none;
  }
`;

export const StyledPagination = styled.div`
  display: flex;
  align-items: center;
  & > *:not(:first-child) {
    margin-left: 12px;
  }
`;

export const ArrowButton = styled.div<{
	$isDisabled: boolean;
	$gap?: number;
}>`
  ${buttonStyle}
  ${props => (props.$isDisabled ? disabledButtonStyle : null)}
`;

export const currentItemStyle = css<{
	$color: Color;
}>`
  background: ${props => props.$color};

  &:hover {
    background: ${props => props.$color};
    transition: background 0.2s ease-in-out;
  }
`;

export const StyledItem = styled.div<{
	$isCurrent: boolean;
	$gap?: number;
	$color: Color;
}>`
  color: #fff;
  ${buttonStyle}
  ${props => (props.$isCurrent ? currentItemStyle : null)}
`;

export const Ellipsis = styled.div`
  color: #fff;
`;
