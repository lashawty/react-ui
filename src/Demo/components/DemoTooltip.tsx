import Tooltip from '@/components/Tooltip';

const Content = () => <p>tooltip</p>;
const Children = () => <p>Hover Me</p>;

export const DemoTooltip = () => (
	<Tooltip
		placement='top'
		themeColor='#808000'
		content={<Content />}
	>
		<Children />
	</Tooltip>
);
