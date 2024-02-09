import {type ReactNode, type RefObject, useCallback, useEffect, useState} from 'react';

type Config = {
	autoplay: boolean;
	dataSource: ReactNode[];
	carouselRef: RefObject<HTMLDivElement>;
};

export const useCarousel = (config: Config) => {
	const {autoplay, carouselRef, dataSource} = config;
	const [currentIndex, setCurrentIndex] = useState(0);
	const [imageWidth, setImageWidth] = useState(0);
	const getIndexes = () => {
		const prevIndex = currentIndex - 1 < 0 ? dataSource.length - 1 : currentIndex - 1;
		const nextIndex = (currentIndex + 1) % dataSource.length;

		return {
			prevIndex, nextIndex,
		};
	};

	const makePosition = (itemIndex: number) => (itemIndex - currentIndex) * imageWidth;

	const handleClickPrev = () => {
		const {prevIndex} = getIndexes();
		setCurrentIndex(prevIndex);
	};

	const handleClickNext = useCallback(() => {
		const {nextIndex} = getIndexes();
		setCurrentIndex(nextIndex);
	}, [currentIndex]);

	const handleUpdateCarouselWidth = () => {
		if (carouselRef.current) {
			const carouselWidth = carouselRef.current.clientWidth;
			setImageWidth(carouselWidth);
		}
	};

	useEffect(() => {
		handleUpdateCarouselWidth();
		window.addEventListener('resize', handleUpdateCarouselWidth);
		return () => {
			window.removeEventListener('resize', handleUpdateCarouselWidth);
		};
	}, []);

	useEffect(() => {
		let intervalId: number;
		if (autoplay) {
			intervalId = setInterval(() => {
				handleClickNext();
			}, 3000);
		}

		return () => {
			clearInterval(intervalId);
		};
	}, [autoplay, handleClickNext]);

	return {
		handleClickPrev,
		handleClickNext,
		makePosition,
		imageWidth,
		currentIndex,
		setCurrentIndex,
	};
};
