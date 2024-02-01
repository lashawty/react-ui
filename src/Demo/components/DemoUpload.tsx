import Grid from '@/components/Grid';
import Upload from '@/components/Upload';

export const DemoUpload = () => (
	<Grid column={2} columnMobile={1}>
		<Upload multiple defaultText='Upload Multiple Files'/>
		<Upload />
	</Grid>
);
