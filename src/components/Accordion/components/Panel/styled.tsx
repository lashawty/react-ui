import styled from 'styled-components';

export const StyledPanel = styled.div<{
	$height: number;
}>`
	height: ${({$height}) => $height}px;
	overflow: hidden;
	transition: height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`;
