import styled from 'styled-components';

export const StyledPanel = styled.div<{
	$maxHeight: number;
}>`
	max-height: ${({$maxHeight}) => $maxHeight}px;
	overflow: hidden;
	transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`;
