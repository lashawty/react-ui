import styled, {css} from 'styled-components';
import {type Color} from '@/components/types.ts';

const thumbSize = 20;

const railStyle = css`
  background: #ddd; /* rail color */
  width: 100%;
  height: 6px;
  border-radius: 5px;
`;

const trackStyle = css<{
	$color: Color;
}>`
  background: ${props => props.$color};
  border-radius: 5px;
  height: 6px;
`;

export const StyledSlider = styled.input<{
	$widthRatio: number;
	$color: Color;
	$isDisabled: boolean;
}>`
	&[type='range'] {
		-webkit-appearance: none;
		outline: none;
    position: relative;
    z-index: 0;
    ${railStyle}

    &:before {
      content: '';
      position: absolute;
      z-index: -1;
      width: ${props => props.$widthRatio}%;
      left: 0px;
      ${trackStyle}
    }
	}

	&[type='range']::-webkit-slider-thumb {
    /* thumb style */
		-webkit-appearance: none;
		width: ${thumbSize}px;
		height: ${thumbSize}px;
		border-radius: 50%;
		border: 2px solid white;
		background: white;
		border: 0.4em solid ${props => props.$color};
		cursor: pointer;
		transition: box-shadow 0.2s ease-in-out, transform 0.1s ease-in-out;

		&:hover {
			transform: scale(1.1);
			box-shadow: 0 0.4em 1em rgba(0, 0, 0, 0.15);
		}

		&:active {
			cursor: grabbing;
			transform: scale(0.975);
			box-shadow: 0 0 1px rgba(0, 0, 0, 0.1);
      background: ${props => props.$color};
		}
	}

	${({$isDisabled})=> $isDisabled && css`
		pointer-events: none;
	`}
`;
