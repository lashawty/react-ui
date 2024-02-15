import InfiniteScroll from '@/components/InfiniteScroll';
import {useGetList} from '@/components/InfiniteScroll/hooks.tsx';
import styled from 'styled-components';
import {Loading} from './Loading';

const Ul = styled.ul`
	border: 1px solid #fff;
`;

const ListItem = styled.li`
	border-bottom: 1px solid #fff;
	padding: 10px;
	color: #fff;
	text-align: left;
	text-transform: uppercase;
`;

export const DemoInfiniteScroll = () => {
	const {list, handleSetCount} = useGetList();

	return (
		<InfiniteScroll height={500} onScrollBottom={handleSetCount} loadingIcon={<Loading />}>
			<Ul>
				{list.map((row, i) => <ListItem key={i}>{row.name}</ListItem>)}
			</Ul>
		</InfiniteScroll>
	);
};
