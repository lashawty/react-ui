import {type Color} from '@/components/types';
import styled, {css} from 'styled-components';
import {flexCenter} from '@/utils/commonStyle';

const activeStyle = css<{
	$color: Color;
}>`
  color: ${({$color}) => $color};
`;

export const StyledTab = styled.div<{
	$isActive: boolean;
	$gap?: number;
	$color: Color;
}>`
  padding: 20px;
  ${flexCenter}
  cursor: pointer;
  color: #fff;
  &:hover {
    color: ${({$color}) => $color};
  }
  ${({$isActive}) => ($isActive ? activeStyle : null)}
`;
