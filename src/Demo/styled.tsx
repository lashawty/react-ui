import styled from 'styled-components';
import {type Color} from '@/components/types.ts';

export const Title = styled.h1`
	font-size: 30px;
	font-weight: bold;
	color: #fff;
	text-align: center;
`;

export const Intro = styled.p`
	margin-top: 20px;
	text-align: center;
	color: #fff;
`;

export const Link = styled.a`
	color: #fff;
`;

export const ListWrapper = styled.ul`
	margin-top: 20px;
	border: 1px solid #fff;
	border-radius: 10px;
`;

export const List = styled.li`
	padding: 20px 10px;
	display: flex;
	align-items: center;
	gap: 5px;

	&:not(:last-child) {
		border-bottom: 1px solid #fff;
	}
`;

export const ThemeColorDisplay = styled.div<{
	$background: Color;
}>`
	width: 100%;
	padding: 5px 10px;
	background: ${props => props.$background};
	border-radius: 10px;
	color: #262626;
	text-align: center;
`;
