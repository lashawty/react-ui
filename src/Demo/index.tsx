import {theme} from '@/theme';
import {AccordionHeader, AccordionPanel, Intro, Link, List, ListWrapper, ThemeColorDisplay, Title, Arrow} from './styled.tsx';
import {DemoButton} from './components/DemoButton.tsx';
import {DemoSwitch} from './components/DemoSwitch.tsx';
import {DemoTextField} from './components/DemoTextField.tsx';
import {DemoRadioGroup} from './components/DemoRadioGroup.tsx';
import {DemoRadio} from './components/DemoRadio.tsx';
import {DemoInput} from './components/DemoInput.tsx';
import {DemoSlider} from './components/DemoSlider.tsx';
import {DemoRate} from './components/DemoRate.tsx';
import {DemoUpload} from './components/DemoUpload.tsx';
import {DemoBadge} from './components/DemoBadge.tsx';
import {DemoChip} from './components/DemoChip.tsx';
import {DemoTooltip} from './components/DemoTooltip.tsx';
import {DemoAccordion} from './components/DemoAccordion.tsx';
import Grid from '@/components/Grid';
import Accordion from '@/components/Accordion';
import {type Color} from '@/components/types.ts';
import {type ReactNode, useState} from 'react';

type Config = {
	label: string;
	component: ReactNode;
	github?: string;
};

const link = 'https://github.com/lashawty/react-ui/tree/main/src/components/';

const Demo = () => {
	const [active, setActive] = useState('');

	const ThemeDemo = (
		<Grid column={4} columnMobile={1}>
			{Object.values(theme).map((color: Color, index) => (
				<ThemeColorDisplay key={index} $background={color}>
					{Object.keys(theme)[index]}
				</ThemeColorDisplay>
			))}
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
		{
			label: 'Slider',
			component: <DemoSlider />,
		},
		{
			label: 'Rate',
			component: <DemoRate />,
		},
		{
			label: 'Upload',
			component: <DemoUpload />,
		},
		{
			label: 'Badge',
			component: <DemoBadge />,
		},
		{
			label: 'Chip',
			component: <DemoChip />,
		},
		{
			label: 'Tooltip',
			component: <DemoTooltip />,
		},
		{
			label: 'Accordion',
			component: <DemoAccordion />,
		},
	];

	const handleOnClick = (target: string) => {
		if (target === active) {
			setActive('');
			return;
		}

		setActive(target);
	};

	return (
		<section>
			<Title>Not A Library</Title>
			<Intro>React UI</Intro>
			<Intro>Based on React, Typescript, styled-components</Intro>
			<ListWrapper>
				{demos.map(demo => {
					const url = demo.github ? demo.github : `${link}${demo.label}`;
					const isExpand = demo.label === active;

					const header = (
						<AccordionHeader>
							<Link href={url} target='_blank'>{demo.label}</Link>
							<Arrow $isExpand={isExpand}/>
						</AccordionHeader>
					);

					return (
						<List key={demo.label}>
							<Accordion
								header={header}
								isExpand={isExpand}
								onClick={() => {
									handleOnClick(demo.label);
								}}>
								<AccordionPanel>
									{demo.component}
								</AccordionPanel>
							</Accordion>
						</List>
					);
				})}
			</ListWrapper>
			<Intro>Designed by Sean</Intro>
		</section>
	);
};

export default Demo;
