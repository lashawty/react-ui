import {useState} from 'react';
import Switch from '@/components/Switch';

export const DemoSwitch = () => {
	const [isChecked, setIsChecked] = useState(false);
	const handleOnChange = () => {
		setIsChecked(!isChecked);
	};

	return (
		<Switch
			themeColor={'secondary'}
			checkedChildren='✓'
			unCheckedChildren='❌'
			isChecked={isChecked}
			onChange={handleOnChange}
		/>
	);
};
