import styled, {css, type RuleSet} from 'styled-components';
import {type Placement} from './types.ts';
import {fadeIn, fadeOut} from '@/utils/commonStyle';

type StyleProps = {
	$gap: number;
};

const topStyle = css<StyleProps>`
	top: 0;
	left: 50%;
	transform: translate(-50%, calc(-100% - ${({$gap}) => $gap}px));
`;

const bottomStyle = css<StyleProps>`
	bottom: 0;
	left: 50%;
	transform: translate(-50%, calc(100% + ${({$gap}) => $gap}px));

`;

const placementStyleMap: Record<Placement, RuleSet<StyleProps>> = {
	top: topStyle,
	bottom: bottomStyle,
};

export const OverlayWrapper = styled.div<{
	$isOpen: boolean;
	$placement: Placement;
	$gap: number;
}>`
  position: absolute;
  z-index: 1;
  background: #FFF;
  border-radius: 4px;
  box-shadow: 0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%), 0 9px 28px 8px rgb(0 0 0 / 5%);
  animation: ${({$isOpen}) => ($isOpen ? fadeIn : fadeOut)} .3s ease-in-out forwards;
  ${({$placement}) => placementStyleMap[$placement]}
`;

export const DropdownButton = styled.div`
`;

export const DropdownWrapper = styled.div`
	position: relative;
`;
