import Input from '@/components/Input';
import FormControl from '@/components/FormControl';
import {type HTMLInputTypeAttribute} from 'react';
import Grid from '@/components/Grid';
const inputList: HTMLInputTypeAttribute[] = ['text', 'file', 'color', 'date', 'email', 'number', 'password', 'tel', 'time', 'text'];

export const DemoInput = () => (
	<Grid column={1} columnMobile={1}>
		{
			inputList.map((inputType, index) => (
				<FormControl key={index} label={`Name: ${inputType}`} >
					<Input type={inputType} name={inputType}/>
				</FormControl>
			))
		}
	</Grid>
);
