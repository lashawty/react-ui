import styled, {ThemeProvider} from 'styled-components';
import {theme} from './theme';
import {DemoSwitch} from '@/demo/DemoSwitch';
import {DemoButton} from '@/demo/DemoButton.tsx';
import {DemoRadio} from '@/demo/DemoRadio.tsx';
import {type Color} from '@/components/types.ts';

type Demo = {
	label: string;
	component: JSX.Element;
};

function App() {
	const ThemeDemo = (
		<>
			<ThemeColorDisplay $background={theme.primary}>
				Primary
			</ThemeColorDisplay>

			<ThemeColorDisplay $background={theme.secondary}>
				Secondary
			</ThemeColorDisplay>

			<ThemeColorDisplay $background={theme.disable}>
				Disable
			</ThemeColorDisplay>
		</>
	);

	const demos: Demo[] = [
		{
			label: 'Theme',
			component: ThemeDemo,
		},
		{
			label: 'Button',
			component: <DemoButton />,
		},
		{
			label: 'Switch',
			component: <DemoSwitch />,
		},
		{
			label: 'Radio',
			component: <DemoRadio />,
		},
	];

	return (
		<ThemeProvider theme={theme}>
			{demos.map(demo => (
				<Box key={demo.label}>
					<Label>{demo.label}: </Label>
					{demo.component}
				</Box>
			))}
		</ThemeProvider>
	);
}

export default App;

const Label = styled.p`
	color: #fff;
`;

const Box = styled.div`
	padding: 10px;
	display: flex;
	align-items: center;
	gap: 5px;
`;

const ThemeColorDisplay = styled.div<{
	$background: Color;
}>`
	padding: 5px 10px;
	background: ${props => props.$background};
	border-radius: 10px;
	color: #fff;
`;

