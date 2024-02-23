import styled, {type RuleSet, css, keyframes} from 'styled-components';
import {fadeIn, fadeOut} from '@/utils/commonStyle';
import {type Placement} from './types';

type PositionStyle = {
	$isOpen: boolean;
	$animationDuration: number;
};

const leftShowDrawer = keyframes`
  0% {
    transform: translate3d(-100%, 0, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
`;

const leftHideDrawer = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-100%, 0, 0);
  }
`;

const rightShowDrawer = keyframes`
  0% {
    transform: translate3d(100%, 0, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
`;

const rightHideDrawer = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(100%, 0, 0);
  }
`;

const bottomShowDrawer = keyframes`
  0% {
    transform: translate3d(0, 100%, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
`;

const bottomHideDrawer = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(0, 100%, 0);
  }
`;

const topShowDrawer = keyframes`
  0% {
    transform: translate3d(0, -100%, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
`;

const topHideDrawer = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(0, -100%, 0);
  }
`;

const topStyle = css<PositionStyle>`
  top: 0px;
  left: 0px;
  width: 100vw;
  animation: ${props => (props.$isOpen ? topShowDrawer : topHideDrawer)} ${props => props.$animationDuration}ms ease-in-out forwards;
`;

const bottomStyle = css<PositionStyle>`
  bottom: 0px;
  left: 0px;
  width: 100vw;
  animation: ${props => (props.$isOpen ? bottomShowDrawer : bottomHideDrawer)} ${props => props.$animationDuration}ms ease-in-out forwards;
`;

const leftStyle = css<PositionStyle>`
  top: 0px;
  left: 0px;
  height: 100vh;
  animation: ${props => (props.$isOpen ? leftShowDrawer : leftHideDrawer)} ${props => props.$animationDuration}ms ease-in-out forwards;
`;

const rightStyle = css<PositionStyle>`
  top: 0px;
  right: 0px;
  height: 100vh;
  animation: ${props => (props.$isOpen ? rightShowDrawer : rightHideDrawer)} ${props => props.$animationDuration}ms ease-in-out forwards;
`;

const placementMap: Record<Placement, RuleSet<PositionStyle>> = {
	top: topStyle,
	right: rightStyle,
	bottom: bottomStyle,
	left: leftStyle,
};

export const Mask = styled.div<PositionStyle>`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background: #00000080;
  z-index: 2;
  animation: ${props => (props.$isOpen ? fadeIn : fadeOut)} ${props => props.$animationDuration}ms ease-in-out forwards;
`;

export const DrawerWrapper = styled.div<{
	$placement: Placement;
} & PositionStyle>`
  position: fixed;
  z-index: 3;
  background: #FFF;
  will-change: transform;
  min-width: 50vw; 
  ${({$placement}) => placementMap[$placement]}
`;

export const Wrapper = styled.div``;
