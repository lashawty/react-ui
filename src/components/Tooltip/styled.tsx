import styled, {type RuleSet, css, keyframes} from 'styled-components';
import {type Placement} from './types';
import {type Color} from '@/components/types.ts';

type StyleProps = {
	$gap: number;
};

export const TooltipArrow = styled.div`
  position: absolute;
`;

export const TooltipArrowContent = styled.div`
  width: 8px;
  height: 8px;
  transform: rotate(45deg);
`;

const topStyle = css<StyleProps>`
  top: 0;
  left: 50%;
  transform: translate(-50%, calc(-100% - ${({$gap}) => $gap}px));

  ${TooltipArrow} {
    left: 50%;
    transform: translate(-50%, 50%);
  }
`;

const bottomStyle = css<StyleProps>`
  bottom: 0;
  left: 50%;
  transform: translate(-50%, calc(100% + ${({$gap}) => $gap}px));

  ${TooltipArrow} {
    top: 0px;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const leftStyle = css<StyleProps>`
  top: 50%;
  left: 0;
  transform: translate(calc(-100% - ${({$gap}) => $gap}px), -50%);

  ${TooltipArrow} {
    top: 50%;
    right: 0px;
    transform: translate(50%, -50%);
  }
`;

const rightStyle = css<StyleProps>`
  top: 50%;
  right: 0;
  transform: translate(calc(100% + ${({$gap}) => $gap}px), -50%);

  ${TooltipArrow} {
    top: 50%;
    left: 0px;
    transform: translate(-50%, -50%);
  }
`;

const placementStyleMap: Record<Placement, RuleSet<StyleProps>> = {
	top: topStyle,
	bottom: bottomStyle,
	left: leftStyle,
	right: rightStyle,
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

export const TooltipWrapper = styled.div<{
	$isVisible: boolean;
	$placement: Placement;
	$color: Color;
	$gap: number;
}>`
  position: absolute;
  z-index: 1;
  background: ${({$color}) => $color};
  color: #fff;
  padding: 8px;
  border-radius: 4px;
  box-shadow: 0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%), 0 9px 28px 8px rgb(0 0 0 / 5%);
  pointer-events: none;
  animation: ${({$isVisible}) => ($isVisible ? fadeIn : fadeOut)} .3s ease-in-out forwards;
  ${({$placement}) => placementStyleMap[$placement]}
  ${TooltipArrowContent} {
    background: ${({$color}) => $color};
  }
`;

export const Span = styled.span`
  color: #fff
`;

export const TooltipRoot = styled.div`
  position: relative;
`;

