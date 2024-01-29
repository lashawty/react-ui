import Input from '@/components/Input';
import Grid from '@/components/Grid';

const prefix = 'Type: ';

export const DemoInput = () => (
	<Grid column={5} columnMobile={1}>
		<Input type='text' label={`${prefix}text`}/>
		<Input type='file' label={`${prefix}file`}/>
		<Input type='color' label={`${prefix}color`}/>
		<Input type='date' label={`${prefix}date`}/>
		<Input type='email' label={`${prefix}email`}/>
		<Input type='number' label={`${prefix}number`}/>
		<Input type='password' label={`${prefix}password`}/>
		<Input type='tel' label={`${prefix}tel`}/>
		<Input type='time' label={`${prefix}time`}/>
		<Input type='text' label='Disable' isDisabled/>
	</Grid>
);
