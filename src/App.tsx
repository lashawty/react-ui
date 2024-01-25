import styled, {ThemeProvider} from 'styled-components';
import {theme} from './theme';
import {DemoSwitch} from '@/demo/DemoSwitch';
import {DemoButton} from '@/demo/DemoButton.tsx';
import {DemoRadio} from '@/demo/DemoRadio.tsx';
import {DemoRadioGroup} from './demo/DemoRadioGroup';
import {DemoTextField} from './demo/DemoTextField';
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

			<ThemeColorDisplay $background={theme.error}>
				Error
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
		{
			label: 'RadioGroup',
			component: <DemoRadioGroup />,
		},
		{
			label: 'TextField',
			component: <DemoTextField />,
		},
	];

	return (
		<ThemeProvider theme={theme}>
			<Title>Not A Library: React UI</Title>
			<Intro>Based on React, Typescript, styled-components</Intro>
			<ListWrapper>
				{demos.map(demo => (
					<List key={demo.label}>
						<Label>{demo.label}: </Label>
						{demo.component}
					</List>
				))}
			</ListWrapper>
			<Intro>Designed by Sean</Intro>
		</ThemeProvider>
	);
}

export default App;

const Title = styled.h1`
	font-size: 30px;
	font-weight: bold;
	color: #fff;
	text-align: center;
`;

const Intro = styled.p`
	margin-top: 20px;
	text-align: center;
	color: #fff;
`;

const Label = styled.p`
	color: #fff;
`;

const ListWrapper = styled.ul`
	margin-top: 20px;
	border: 1px solid #fff;
	border-radius: 10px;
`;

const List = styled.li`
	padding: 20px 10px;
	display: flex;
	align-items: center;
	gap: 5px;

	&:not(:last-child) {
		border-bottom: 1px solid #fff;
	}
`;

const ThemeColorDisplay = styled.div<{
	$background: Color;
}>`
	padding: 5px 10px;
	background: ${props => props.$background};
	border-radius: 10px;
	color: #262626;
`;

