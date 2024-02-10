import axios from 'axios';
import {type RefObject, useEffect, useState} from 'react';

const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=';

export const useInfiniteScroll = (loadingRef: RefObject<HTMLDivElement>, onScrollBottom: () => void) => {
	useEffect(() => {
		const loadingElem = loadingRef.current;
		if (!loadingElem) {
			return;
		}

		const intersectionObserver = new IntersectionObserver(entries => {
			if (entries[0].isIntersecting) {
				onScrollBottom();
			}
		});
		intersectionObserver.observe(loadingElem);

		return () => {
			intersectionObserver.unobserve(loadingElem);
		};
	}, []);
};

type List = {
	name: string;
};

export const useGetList = () => {
	const [count, setCount] = useState(0);
	const [list, setList] = useState<List[]>([]);

	useEffect(() => {
		void axios.get(`${apiUrl}${count}`)
			.then(res => {
				// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
				const newList: List[] = res.data.results;
				setList(prev => [...prev, ...newList]);
			});
	}, [count]);

	const handleSetCount = () => {
		setCount(prev => prev + 1);
	};

	return {
		list,
		handleSetCount,
	};
};
