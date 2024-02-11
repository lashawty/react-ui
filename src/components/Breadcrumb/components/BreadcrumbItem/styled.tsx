import styled from 'styled-components';

export const StyledItem = styled.a<{
	$isClickable: boolean;
}>`
	display: flex;
	align-items: center;
	text-decoration: none;
	cursor: ${({$isClickable}) => $isClickable ? 'pointer' : 'default'};
`;
