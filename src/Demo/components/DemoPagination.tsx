import Pagination from '@/components/Pagination';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styled from 'styled-components';
import {useState} from 'react';
import {flexCenter} from '@/utils/commonStyle';

const Wrapper = styled.div<{
	$gap?: number;
}>`
  ${flexCenter}
  flex-direction: column;
`;

const LeftArrow = styled(ArrowForwardIosIcon)`
  transform: rotate(180deg);
  color: #fff;
  cursor: pointer;
`;

const RightArrow = styled(LeftArrow)`
	transform: rotate(0);
`;

const icons = {
	prevIcon: <LeftArrow />,
	nextIcon: <RightArrow />,
};

export const DemoPagination = () => {
	const [page, setPage] = useState<number>(1);
	const total = 5;
	const handleOnChangePage = (page: number) => {
		setPage(page);
	};

	return (
		<Wrapper $gap={10}>
			<Pagination icons={icons} total={total} page={page} pageSize={1} onChange={handleOnChangePage} hasEllipsis/>
			<Pagination icons={icons} total={total} page={page} pageSize={1} onChange={handleOnChangePage} />
		</Wrapper>
	);
};
