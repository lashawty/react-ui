import Input from '@/components/Input';
import Grid from '@/components/Grid';

export const DemoInput = () => (
	<Grid column={5} columnMobile={1}>
		<Input />
		<Input type='file'/>
		<Input type='color'/>
		<Input type='date'/>
		<Input type='email'/>
		<Input type='number'/>
		<Input type='password'/>
		<Input type='range'/>
		<Input type='tel'/>
		<Input type='time'/>
	</Grid>
);
