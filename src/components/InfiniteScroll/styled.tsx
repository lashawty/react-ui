import styled from 'styled-components';

export const Loading = styled.div`
	margin-top: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const InfiniteScrollWrapper = styled.div<{
	$height: number;
}>`
	width: 100%;
	max-height: ${({$height}) => $height}px;
	overflow: auto;
	overscroll-behavior: contain;
`;
