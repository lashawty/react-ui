import Button from '@/components/Button';
import Grid from '@/components/Grid';

export const DemoButton = () => (
	<Grid column={3} columnMobile={1}>
		<Button variant='contained'>Contained Button</Button>
		<Button variant='outlined' themeColor='secondary'>Outlined Button</Button>
		<Button variant='text' themeColor='#a391a1' >Text Button</Button>
		<Button isDisabled>isDisabled</Button>
		<Button isLoading themeColor='#ff0000'/>
	</Grid>
);
