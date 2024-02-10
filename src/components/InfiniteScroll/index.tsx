import {type Props} from './types.ts';
import {useRef} from 'react';
import {InfiniteScrollWrapper, Loading} from '@/components/InfiniteScroll/styled.tsx';
import {useInfiniteScroll} from './hooks.tsx';

/**
 * `Infinite scroll` 能在面對多筆資料時，讓捲軸滑動到底部時再載入下一頁面的資料。
 */
const InfiniteScroll = ({
	onScrollBottom,
	children,
	height,
	loadingIcon,
}: Props) => {
	const loadingRef = useRef<HTMLDivElement>(null);

	const handleOnScrollBottom = () => {
		if (onScrollBottom) {
			onScrollBottom();
		}
	};

	useInfiniteScroll(loadingRef, handleOnScrollBottom);

	return (
		<InfiniteScrollWrapper $height={height}>
			{children}
			<Loading ref={loadingRef}>
				{loadingIcon}
			</Loading>
		</InfiniteScrollWrapper>
	);
};

export default InfiniteScroll;
