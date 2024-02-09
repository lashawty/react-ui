## Usage
```tsx

const imageUrl = './logo.webp';
const length = 300;

const arrowConfig: ArrowConfig = {
    isVisible: true,
    leftArrow: <LeftArrow />, // use anything you prefer
    rightArrow: <RightArrow />, // use anything you prefer
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

```