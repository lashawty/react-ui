import {type Props} from './types.ts';
import {StyledItem} from './styled.tsx';

const BreadcrumbItem = ({
	url,
	children,
}: Props) => (
	<StyledItem
		$isClickable={Boolean(url)}
		href={url}
	>
		{children}
	</StyledItem>
);

export default BreadcrumbItem;
