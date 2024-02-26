import {type Color} from '@/components/types';
import styled from 'styled-components';

export const TabsScrollerWrapper = styled.div`
  position: relative;
`;

export const Indicator = styled.div<{
	$left: number;
	$width: number;
	$color: Color;
}>`
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translate3d(${({$left}) => $left}px, 0, 0);
  height: 2px;
  width: ${({$width}) => $width}px;
  background: ${({$color}) => $color};
  transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

export const StyledTabGroup = styled.div`
  display: flex;
`;
