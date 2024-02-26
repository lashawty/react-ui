import styled from 'styled-components';
import {type Color} from '@/components/types.ts';

export const Wrapper = styled.div<{$gap?: number}>`
	padding: 50px 20px;
	display: flex;
	justify-content: center;
	border-top: 1px solid #fff;
`;

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
	margin: 20px auto;
	display: block;
	color: #fff;
	transition: transform .4s;
	&:hover{
		transform: scale(1.1);
	}
`;

export const ListWrapper = styled.ul`
	margin: 20px auto 0;
	border: 1px solid #fff;
	border-radius: 10px;
	max-width: 1000px;
	width: 100%;
`;

export const List = styled.li`
	display: flex;
	flex-direction: column;
	align-items: center;
	
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
