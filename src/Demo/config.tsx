import {type ReactNode} from 'react';
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
import {DemoCarousel} from './components/DemoCarousel.tsx';
import {DemoTable} from './components/DemoTable.tsx';
import {DemoInfiniteScroll} from '@/Demo/components/DemoInfiniteScroll.tsx';
import {DemoBreadcrumb} from '@/Demo/components/DemoBreadcrumb.tsx';
import {DemoSelect} from '@/Demo/components/DemoSelect.tsx';
import {DemoDropdownSelect} from '@/Demo/components/DemoDropdownSelect.tsx';
import {DemoDrawer} from './components/DemoDrawer.tsx';
import {DemoTabs} from './components/DemoTabs.tsx';
import Grid from '@/components/Grid';
import {type Color} from '@/components/types.ts';
import {theme} from '@/theme';
import {ThemeColorDisplay} from './styled';

type Config = {
	label: string;
	component: ReactNode;
	github?: string;
};

const ThemeDemo = (
	<Grid column={4} columnMobile={1}>
		{Object.values(theme).map((color: Color, index) => (
			<ThemeColorDisplay key={index} $background={color}>
				{Object.keys(theme)[index]}
			</ThemeColorDisplay>
		))}
	</Grid>
);

export const demos: Config[] = [
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
		label: 'DropdownSelect',
		component: <DemoDropdownSelect />,
	},
	{
		label: 'Select',
		component: <DemoSelect />,
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
	{
		label: 'Carousel',
		component: <DemoCarousel />,
	},
	{
		label: 'Table',
		component: <DemoTable />,
	},
	{
		label: 'Breadcrumb',
		component: <DemoBreadcrumb />,
	},
	{
		label: 'Drawer',
		component: <DemoDrawer />,
	},
	{
		label: 'Tabs',
		component: <DemoTabs />,
	},
	{
		label: 'InfiniteScroll',
		component: <DemoInfiniteScroll />,
	},
];
