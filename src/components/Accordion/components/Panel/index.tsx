import {StyledPanel} from './styled.tsx';
import {type Props} from './types.ts';
import {useRef} from 'react';

const Panel = ({
	panel,
	isExpand = false,
	extraHeight = 0,
}: Props) => {
	const panelRef = useRef<HTMLDivElement>(null);
	const scrollHeight = panelRef.current?.scrollHeight ?? 0;

	return (
		<StyledPanel
			ref={panelRef}
			$height={isExpand ? scrollHeight + extraHeight : 0}
		>
			{panel}
		</StyledPanel>
	);
};

export default Panel;
