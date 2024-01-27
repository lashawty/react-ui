import styled from 'styled-components';
import {type Color} from '@/components/types.ts';

export const StyledInput = styled.input<{
	$color: Color;
}>`
	padding: 10px 10px;
	border-radius: 5px;
	background: transparent;
	box-sizing: border-box;
	border: 1px solid #fff;
	color: #fff;
	outline: 2px solid transparent;
	outline-offset: 2px;
	width: 100%;
	height: 100%;
	
	&:active, &:focus {
	border: 1px solid ${({$color}) => $color};  
	}
	
	/*Range Reset*/
	&[type="range"] {
		-webkit-appearance: none;
		appearance: none;
		background: transparent;
		cursor: pointer;
	}
	
	/* Removes default focus */
	&[type="range"]:focus {
		outline: none;
	}
	
	/***** Chrome, Safari, Opera and Edge Chromium styles *****/
	/* slider track */
	&[type="range"]::-webkit-slider-runnable-track {
		background-color: ${({$color}) => $color};
		border-radius: 10px;
		height: 10px;
	}
	
	/* slider thumb */
	&[type="range"]::-webkit-slider-thumb {
		-webkit-appearance: none; /* Override default look */
		appearance: none;
		margin-top: -3px; /* Centers thumb on the track */
	
		/*custom styles*/
		background-color: #fff;
		height: 15px;
		width: 1rem;
		border-radius: 100%;
		
	}
	
	&[type="range"]:focus::-webkit-slider-thumb {
		outline: 2px solid #fff;
		outline-offset: 0.125rem;
	}
	
	/******** Firefox styles ********/
	/* slider track */
	&[type="range"]::-moz-range-track {
		background-color: ${({$color}) => $color};
		border-radius: 0.5rem;
		height: 0.5rem;
	}
	
	/* slider thumb */
	&[type="range"]::-moz-range-thumb {
		border: none; /*Removes extra border that FF applies*/
		border-radius: 0; /*Removes default border-radius that FF applies*/
	
		/*custom styles*/
		background-color: #fff;
		height: 2rem;
		width: 1rem;
	}
	
	&[type="range"]:focus::-moz-range-thumb {
		border: 1px solid ${({$color}) => $color};
		outline: 1px solid ${({$color}) => $color};
		outline-offset: 0.125rem;
	}
	
	
	&::placeholder {
		color: rgba(255, 255, 255, .3);
	}
	
	&::file-selector-button {
		padding: 0;
		background: transparent;
		border: none;
		color: #fff;
	}

	&[type="date"]::-webkit-calendar-picker-indicator {
		filter: invert(1);
	}

	&[type="date"]::-moz-calendar-picker-indicator {
		filter: invert(1);
	}

	&[type="date"]::-ms-clear {
		filter: invert(1);
	}

	&[type="time"]::-webkit-calendar-picker-indicator {
		filter: invert(1);
	}
`;
