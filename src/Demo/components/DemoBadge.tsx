import Badge from '@/components/Badge';
import Grid from '@/components/Grid';
import styled from 'styled-components';

const Box = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background: url("./logo.webp") no-repeat center;
	background-size: contain;
`;

export const DemoBadge = () => (
	<Grid column={5} gap={50}>
		<Badge badgeContent={15}><Box/></Badge>
		<Badge badgeContent={15} placement='top-left'><Box/></Badge>
		<Badge badgeContent={15} placement='bottom-left'><Box/></Badge>
		<Badge badgeContent={15} placement='bottom-right'><Box/></Badge>
		<Badge badgeContent={15} variant='dot'><Box/></Badge>
	</Grid>
);
