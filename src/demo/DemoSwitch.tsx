import {useState} from 'react';
import Switch from '@/components/Switch';
import Grid from '@/components/Grid';

export const DemoSwitch = () => {
	const [isChecked, setIsChecked] = useState(false);
	const handleOnChange = () => {
		setIsChecked(!isChecked);
	};

	return (
		<Grid column={3}>
			<Switch
				themeColor={'#54e35e'}
				isChecked={isChecked}
				onChange={handleOnChange}
			/>

			<Switch
				themeColor={'#54e35e'}
				isChecked={false}
				isDisabled
			/>

			<Switch
				themeColor='secondary'
				isChecked={isChecked}
				onChange={handleOnChange}
				size='small'
			/>
		</Grid>
	);
};
