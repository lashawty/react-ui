import styled from 'styled-components';
import {media} from '@/breakpoints';

export const StyledGrid = styled.div<{
	$column: number;
	$columnMobile?: number;
	$gap: number;
}>`
	display: grid;
	gap: ${props => props.$gap}px;
	grid-template-columns: repeat(${props => props.$columnMobile ? props.$columnMobile : 2}, 1fr);;
	align-items: center;
	justify-items: center;
	
	${media.sm} {
		grid-template-columns: repeat(${props => props.$column}, 1fr);
	}
`;
