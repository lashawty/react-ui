import styled, {css} from 'styled-components';
import {type Color} from '@/components/types.ts';
import {type Placement} from './types';

const topLeftStyle = css`
  top: 0px;
  left: 0px;
  transform: translate(-50%, -50%);
`;

const topRightStyle = css`
  top: 0px;
  right: 0px;
  transform: translate(50%, -50%);
`;

const bottomLeftStyle = css`
  bottom: 0px;
  left: 0px;
  transform: translate(-50%, 50%);
`;

const bottomRightStyle = css`
  bottom: 0px;
  right: 0px;
  transform: translate(50%, 50%);
`;

const placementStyleMap = {
	'top-left': topLeftStyle,
	'top-right': topRightStyle,
	'bottom-left': bottomLeftStyle,
	'bottom-right': bottomRightStyle,
};

export const StandardBadge = styled.div`
  display: flex;
  flex-flow: row wrap;
  place-content: center;
  align-items: center;
  position: absolute;
  box-sizing: border-box;
  font-weight: 500;
  font-size: 12px;
  min-width: 20px;
  padding: 0px 6px;
  height: 20px;
  border-radius: 10px;
  z-index: 1;
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  color: #FFF;
  
`;

export const DotBadge = styled.div`
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 100%;
`;

export const BadgeWrapper = styled.div<{
	$color: Color;
	$placement: Placement;
}>`
  display: inline-flex;
  position: relative;

  ${StandardBadge}, ${DotBadge} {
    background-color: ${({$color}) => $color};
    ${({$placement}) => placementStyleMap[$placement] || topRightStyle}
  }
`;
