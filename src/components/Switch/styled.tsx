import styled, {css} from 'styled-components';
import {type Color} from '../../types.ts';

const transitionStyle = css`
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, right 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

type SwitchButton = {
	$thumbSize: number;
	$switchWidth: number;
	$switchColor: Color;
	$isDisabled: boolean;
};

export const SwitchButton = styled.div<SwitchButton>`
  position: relative;
  display: inline-flex;
	
  border-radius: 50px;
  border: 3px solid ${props => props.$switchColor};
  box-sizing: content-box;
  background: ${props => props.$switchColor};
	
  width: ${props => props.$switchWidth}px;
  height: ${props => props.$thumbSize}px;
	
  color: #FFF;
  cursor: ${props => (props.$isDisabled ? 'not-allowed' : 'pointer')};
`;

type Thumb = {
	$thumbSize: number;
	$switchWidth: number;
	$isChecked: boolean;
};

export const Thumb = styled.div<Thumb>`
  position: absolute;
  ${props => {
		if (props.$isChecked) {
			return `transform: translateX(${props.$switchWidth - props.$thumbSize}px);`;
		}

		return 'transform: translateX(0);';
	}}
  ${transitionStyle}
	
  border-radius: 50px;
  background: #FFF;
	
  width: ${props => props.$thumbSize}px;
  height: ${props => props.$thumbSize}px;
`;

type Label = {
	$padding: number;
	$switchWidth: number;
	$labelWidth: number;
	$isChecked: boolean;
};

export const Label = styled.div<Label>`
  padding: 0px ${props => props.$padding}px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${props => {
		if (props.$isChecked) {
			return `right: ${props.$switchWidth - props.$labelWidth}px;`;
		}

		return `
    right: 0px;
    `;
	}}
  ${transitionStyle}
  
  font-size: 14px;
  white-space: nowrap;
`;
