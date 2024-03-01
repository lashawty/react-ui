import styled from 'styled-components';
import {type Color} from '@/components/types';
import {type IndicatorSize} from './types';
import {flexCenter} from '@/utils/commonStyle';

export const StyledSpin = styled.div<{
	$color: Color;
}>`
  display: inline-flex;

  svg {
    color: ${({$color}) => $color};
  }
`;

export const SpinContainer = styled.div<{
	$color: Color;
}>`
  position: relative;
  display: inline-flex;
  width: 100%;
  height: 100%;

  svg {
    color: ${({$color}) => $color};
  }
`;

export const Indicator = styled.div<{
	$indicatorSize: IndicatorSize;
	$gap?: number;
}>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 4;
  ${flexCenter}
  width: 100%;
  height: 100%;
`;

export const Mask = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .5);
`;
