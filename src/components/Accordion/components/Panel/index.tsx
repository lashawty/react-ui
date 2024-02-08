import {StyledPanel} from './styled.tsx';
import {type Props} from './types.ts';
import {useRef} from 'react';

const Panel = ({
	panel,
	isExpand = false,
}: Props) => {
	const panelRef = useRef<HTMLDivElement>(null);
	const scrollHeight = panelRef.current?.scrollHeight ?? 0;

	return (
		<StyledPanel
			ref={panelRef}
			$maxHeight={isExpand ? scrollHeight : 0}
		>
			{panel}
		</StyledPanel>
	);
};

export default Panel;
