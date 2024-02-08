import Grid from '@/components/Grid';
import Tooltip from '@/components/Tooltip';
import {type Placement} from '@/components/Tooltip/types';

const Content = ({placement}: {placement: Placement}) => <p>{placement}</p>;
const Children = () => <p>Hover Me</p>;

const placements: Placement[] = ['top', 'left', 'bottom', 'right'];

export const DemoTooltip = () => (
	<Grid columnMobile={1}>
		{
			placements.map(p => (
				<Tooltip
					key={p}
					placement={p}
					themeColor='#808000'
					content={<Content placement={p}/>}
				>
					<Children />
				</Tooltip>
			))
		}
	</Grid>
);
