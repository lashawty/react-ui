import {theme} from '@/theme';
import {Intro, Link, List, ListWrapper, ThemeColorDisplay, Title} from './styled.tsx';
import {DemoButton} from './components/DemoButton.tsx';
import {DemoSwitch} from './components/DemoSwitch.tsx';
import {DemoTextField} from './components/DemoTextField.tsx';
import {DemoRadioGroup} from './components/DemoRadioGroup.tsx';
import {DemoRadio} from './components/DemoRadio.tsx';
import {DemoInput} from '@/Demo/components/DemoInput.tsx';
import Grid from '@/components/Grid';

type Config = {
	label: string;
	component: JSX.Element;
	github?: string;
};

const link = 'https://github.com/lashawty/react-ui/tree/main/src/components/';

const Demo = () => {
	const ThemeDemo = (
		<Grid column={4} columnMobile={2}>
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
		</Grid>
	);

	const demos: Config[] = [
		{
			label: 'Theme',
			component: ThemeDemo,
			github: 'https://github.com/lashawty/react-ui/blob/main/src/theme/index.ts',
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
		{
			label: 'Input',
			component: <DemoInput />,
		},
	];

	return (
		<>
			<Title>Not A Library</Title>
			<Intro>React UI</Intro>
			<Intro>Based on React, Typescript, styled-components</Intro>
			<ListWrapper>
				{demos.map(demo => {
					const url = demo.github ? demo.github : `${link}${demo.label}`;
					return (
						<List key={demo.label}>
							<Link href={url} target='_blank'>{demo.label}: </Link>
							{demo.component}
						</List>
					);
				})}
			</ListWrapper>
			<Intro>Designed by Sean</Intro>
		</>
	);
};

export default Demo;
