import Rate from '@/components/Rate';
import StarIcon from '@mui/icons-material/Star';
import Grid from '@/components/Grid';

export const DemoRate = () => (
	<Grid>
		<Rate allowHalf character={<StarIcon />} />
		<Rate character='A' />
		<Rate isDisabled character={<StarIcon />} defaultValue={3}/>
	</Grid>
);

