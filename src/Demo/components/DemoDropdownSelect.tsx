import {options} from '../data';
import DropdownSelect from '@/components/DropdownSelect';
import Grid from '@/components/Grid';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import {Loading} from './Loading';

export const DemoDropdownSelect = () => (
	<Grid column={3} columnMobile={1}>
		<DropdownSelect
			options={options}
			arrowChildren={<ArrowDropDownOutlinedIcon />}
			loadingChildren={<Loading />}
		/>
		<DropdownSelect
			options={options}
			arrowChildren={<ArrowDropDownOutlinedIcon />}
			loadingChildren={<Loading />}
			isLoading
		/>
		<DropdownSelect
			options={options}
			arrowChildren={<ArrowDropDownOutlinedIcon />}
			loadingChildren={<Loading />}
			isDisabled
		/>
	</Grid>
);
