import Tabs from '@/components/Tabs';
import {useState} from 'react';
import styled from 'styled-components';

const Text = styled.p`
	margin-top: 20px;
	text-align: center;
	color: #fff;
`;

export const DemoTabs = () => {
	const options = Array.from({length: 3}).map((_, index) => `Tab ${index}`);
	const [value, setValue] = useState(options[0]);

	return (
		<div>
			<Tabs
				options={options}
				onChange={(value: string) => {
					setValue(value);
				}}
			/>
			<Text>Value: {value}</Text>
		</div>
	);
};
