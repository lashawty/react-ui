import RadioGroup from '@/components/RadioGroup';
import {type Radio} from '@/components/RadioGroup/types';

export const DemoRadioGroup = () => {
	const radios: Radio[] = [
		{
			value: 0,
		},
		{
			value: 1,
		},
		{
			value: 2,
		},
	];

	return (
		<RadioGroup radios={radios} columns={2} themeColor='secondary' />
	);
};
