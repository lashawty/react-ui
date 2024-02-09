import {type Props} from './types.ts';
import {CarouselWrapper, ControlButtons, Slides, Slide, Dots, Dot} from './styled.tsx';
import {useRef} from 'react';
import {useCarousel} from './hooks.tsx';
/**
 * `Carousel`
 * A simple carousel component
 * If you need a complex usage, do not use this one
 * scroll event not supported
 */
const Carousel = ({
	className,
	dataSource = [],
	hasDots = true,
	arrowConfig,
	autoplay = true,
	size,
}: Props) => {
	const carouselRef = useRef<HTMLDivElement>(null);
	const {isVisible: hasControlArrow, leftArrow, rightArrow} = arrowConfig;
	const config = {
		autoplay,
		carouselRef,
		dataSource,
	};
	const {
		makePosition,
		handleClickPrev,
		handleClickNext,
		currentIndex,
		setCurrentIndex,
	} = useCarousel(config);

	const {width, height} = size;
	return (
		<CarouselWrapper
			ref={carouselRef}
			className={className}
			$width={width}
			$height={height}
		>
			<Slides>
				{
					dataSource.map((children, index) => (
						<Slide
							key={index}
							$left={makePosition(index)}
						>
							{children}
						</Slide>
					))
				}
			</Slides>

			{hasControlArrow && (
				<ControlButtons>
					<div onClick={handleClickPrev}>{leftArrow}</div>
					<div onClick={handleClickNext}>{rightArrow}</div>
				</ControlButtons>
			)}

			{hasDots && (
				<Dots>
					{
						Array.from({length: dataSource.length}).map((_, index) => (
							<Dot
								key={index}
								$isCurrent={index === currentIndex}
								onClick={() => {
									setCurrentIndex(index);
								}}
							/>
						))
					}
				</Dots>
			)}
		</CarouselWrapper>
	);
};

export default Carousel;
