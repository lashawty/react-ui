import {type PaginationParams} from './types';

export const usePagination = ({
	page = 1,
	pageSize = 20,
	total,
	hasEllipsis,
	onChange,
}: PaginationParams) => {
	const totalPage = Math.ceil(total / pageSize);

	const items = [...Array(totalPage).keys()]
		.map(key => key + 1)
		.map(item => ({
			type: 'page',
			isCurrent: page === item,
			page: item,
			onClick() {
				if (onChange) {
					onChange(item);
				}
			},
		}));
	const markedItems = items
		.map(item => {
			if (
				item.page === totalPage
      || item.page === 1
      || item.page === page
      || item.page === page + 1
      || item.page === page - 1
			) {
				return item;
			}

			return {
				...item,
				type: item.page > page ? 'end-ellipsis' : 'start-ellipsis',
			};
		});
	const ellipsisItems = markedItems
		.filter((item, index) => {
			if (item.type === 'start-ellipsis' && markedItems[index + 1].type === 'start-ellipsis') {
				return false;
			}

			if (item.type === 'end-ellipsis' && markedItems[index + 1].type === 'end-ellipsis') {
				return false;
			}

			return true;
		});

	const handleClickNext = () => {
		if (page === totalPage) {
			return;
		}

		const nextCurrent = page + 1 > totalPage ? totalPage : page + 1;
		if (onChange) {
			onChange(nextCurrent);
		}
	};

	const handleClickPrev = () => {
		if (page === 1) {
			return;
		}

		const prevCurrent = page - 1 < 1 ? 1 : page - 1;
		if (onChange) {
			onChange(prevCurrent);
		}
	};

	return {
		items: hasEllipsis ? ellipsisItems : items,
		totalPage,
		handleClickNext,
		handleClickPrev,
	};
};
