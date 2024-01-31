import Grid from '@/components/Grid';
import Slider from '@/components/Slider';

export const DemoSlider = () => (
	<Grid>
		<Slider />
		<Slider isDisabled defaultValue={10}/>
	</Grid>
);
