import {type Props} from './types';
import {StyledPagination, ArrowButton, StyledItem, Ellipsis} from './styled';
import {useColor} from '@/utils/hooks';
import {usePagination} from './hooks';

/**
 * `Pagination`
*/
const Pagination = ({
	themeColor = 'primary',
	hasEllipsis = false,
	page,
	pageSize,
	total,
	onChange,
	icons = {
		prevIcon: 'prev',
		nextIcon: 'next',
	},
}: Props) => {
	const {makeColor} = useColor();
	const color = makeColor({themeColor});
	const {prevIcon, nextIcon} = icons;
	const {
		items,
		totalPage,
		handleClickNext,
		handleClickPrev,
	} = usePagination({
		page,
		pageSize,
		total,
		hasEllipsis,
		onChange,
	});

	return (
		<StyledPagination>
			<ArrowButton
				role='presentation'
				onClick={handleClickPrev}
				$isDisabled={page === 1}
			>
				{prevIcon}
			</ArrowButton>
			{
				items.map(item => {
					if (item.type === 'page') {
						return (
							<StyledItem
								key={item.page}
								$isCurrent={item.isCurrent}
								$color={color}
								onClick={item.onClick}
							>
								{item.page}
							</StyledItem>
						);
					}

					return (
						<Ellipsis key={item.page}>
              ...
						</Ellipsis>
					);
				})
			}
			<ArrowButton
				role='presentation'
				onClick={handleClickNext}
				$isDisabled={page === totalPage}
			>
				{nextIcon}
			</ArrowButton>
		</StyledPagination>
	);
};

export default Pagination;
