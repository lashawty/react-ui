import {type Props} from './types.ts';
import Header from './components/Header';
import Panel from './components/Panel';
import {StyledAccordion} from '@/components/Accordion/styled.tsx';

/**
 * `Accordion`
 */
const Accordion = ({
	header,
	children,
	isExpand = false,
	onClick,
	className,
}: Props) => (
	<StyledAccordion className={className}>
		<Header onClick={onClick} header={header} />
		<Panel isExpand={isExpand} panel={children} />
	</StyledAccordion>
);

export default Accordion;
