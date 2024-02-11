import Breadcrumb from '@/components/Breadcrumb';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import styled from 'styled-components';
import {type ChildrenList} from '@/components/Breadcrumb/types.ts';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 10px
`;

const CollapsedElement = styled(MoreHorizIcon)`
  color: #fff;
`;

const Separator = styled(ArrowForwardIosIcon)`
  color: #fff;
`;

const Item = styled.div`
  padding: 5px;
  color: #fff;
`;

const generateChildrenList = (length: number): ChildrenList[] => Array.from({length}).map((_, i) => ({
	children: <Item>{i}</Item>,
	url: `?breadcrumbDemoUrl=${i}`,
}));

export const DemoBreadcrumb = () => (
	<Wrapper>
		<Breadcrumb
			separator={<Separator />}
			childrenList={generateChildrenList(5)}
		/>
		<Breadcrumb
			separator={<Separator />}
			childrenList={generateChildrenList(10)}
			collapsedElement={<CollapsedElement />}
		/>
	</Wrapper>
);
