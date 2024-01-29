import styled, {css} from 'styled-components';
import {type Color} from '@/components/types.ts';

export const StyledInput = styled.input<{
	$color: Color;
	$isDisabled: boolean;
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
	flex: 1;
	min-height: 40px;
	
	&:active, &:focus {
		border: 1px solid ${({$color}) => $color};  
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

	${({$isDisabled, theme}) => $isDisabled && css`
		pointer-events: none;
		&:active, &:focus {
			border: 1px solid ${theme.disabled};
		}
	`};
`;

export const Root = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
`;

export const Label = styled.label`
	margin-bottom: 10px;
	display: block;
	color: #fff;
`;
