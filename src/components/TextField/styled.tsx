import styled, {css} from 'styled-components';
import {type Theme, type Color} from '@/components/types.ts';

export const Textarea = styled.textarea`
	padding: 10px;
	width: 100%;
	min-height: 100px;
	outline: none;
	border: none;
	border-radius: 4px;
	
	font-size: 14px;
	line-height: 1.5;
`;

const errorStyle = css<Theme>`
	${Textarea} {
		border: 2px solid ${props => props.theme.error};

		&:focus {
			border: 2px solid ${props => props.theme.error};
		}
	}
`;

const disabledStyle = css<Theme>`
	cursor: not-allowed;
	
	.text-field__input {
		cursor: not-allowed;
		background: none;
	}

	${Textarea} {
		border: 2px solid ${props => props.theme.disable};

		&:focus {
			border: 2px solid ${props => props.theme.disable};
		}
	}
`;

export const StyledTextarea = styled.div<{
	$isError: boolean;
	$isDisabled: boolean;
	$color: Color;
} & Theme>`
	display: flex;
	align-items: center;
 	border: 1px solid #fff;
	border-radius: 4px;
	padding: 5px;
	box-sizing: border-box;

	${Textarea} {
		border: 2px solid #262626;

		&:focus {
			border: 2px solid ${props => props.$color};
		}
	}

	${props => (props.$isError && errorStyle)}
	${props => (props.$isDisabled && disabledStyle)}
`;

