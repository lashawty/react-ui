import styled from 'styled-components';
import {type Color} from '@/components/types.ts';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

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

export const AccordionHeader = styled.div`
	padding: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
`;

export const Arrow = styled(KeyboardArrowDownIcon)<{
	$isExpand: boolean;
}>`
	color: #fff;
	transform: rotate(${({$isExpand}) => $isExpand ? 180 : 0}deg);
`;

export const AccordionPanel = styled(AccordionHeader)`
	padding: 50px;
`;

export const Link = styled.a`
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
