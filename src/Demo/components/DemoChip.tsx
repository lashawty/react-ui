import Chip from '@/components/Chip';
import Grid from '@/components/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import styled from 'styled-components';

const StyledDeleteIcon = styled(DeleteIcon)`
	cursor: pointer;
	color: #fff;

	&:hover {
		opacity: 0.8;
	}
`;

export const DemoChip = () => (
	<Grid column={4} columnMobile={1}>
		<Chip label='Chip' />
		<Chip label='Chip' themeColor='secondary' deleteIcon={<StyledDeleteIcon fontSize='small'/>}/>
		<Chip label='Chip' themeColor='error' deleteIcon={<StyledDeleteIcon fontSize='small'/>} icon={<LocalOfferIcon fontSize='small'/>}/>
		<Chip label='Chip' themeColor='#10454e' icon={<LocalOfferIcon fontSize='small'/>}/>
	</Grid>
);
