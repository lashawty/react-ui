import TextField from '@/components/TextField';
import Grid from '@/components/Grid';

export const DemoTextField = () => (
	<Grid column={3} columnMobile={1}>
		<TextField placeholder='Type your message here.' />
		<TextField placeholder='isError' isError />
		<TextField placeholder='isDisabled' isDisabled/>
	</Grid>
);

