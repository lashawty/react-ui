import Carousel from '@/components/Carousel';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styled from 'styled-components';
import {type ArrowConfig} from '@/components/Carousel/types.ts';

const imageUrl = './logo.webp';
const length = 300;

const RightArrow = styled(ArrowForwardIosIcon)`
	color: #000;
	cursor: pointer;
`;

const LeftArrow = styled(RightArrow)`
	transform: rotate(180deg);
`;

const arrowConfig: ArrowConfig = {
	isVisible: true,
	leftArrow: <LeftArrow />,
	rightArrow: <RightArrow />,
};

const Slide = styled.div`
	max-width: ${length}px;
	width: 100%;
	height: ${length}px;
	background: url(${imageUrl}) no-repeat center;
	background-size: cover;
	border-radius: 10px;
	border: 1px solid #000;
`;

const data = [<Slide key={1}/>, <Slide key={2}/>, <Slide key={3}/>];
const size = {width: length, height: length};

export const DemoCarousel = () => (
	<Carousel dataSource={data} arrowConfig={arrowConfig} size={size}/>
);
