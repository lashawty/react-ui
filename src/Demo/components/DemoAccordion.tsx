import Accordion from '@/components/Accordion';
import styled from 'styled-components';
import {useState} from 'react';

const Header = styled.div`
	padding: 10px;
  	width: 100%;
  	background: darkolivegreen;
`;

const Children = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;	
	background: beige;
`;

export const DemoAccordion = () => {
	const [isExpand, setIsExpand] = useState(false);
	const handleOnClick = () => {
		setIsExpand(!isExpand);
	};

	return (
		<Accordion header={<Header>Open</Header>} onClick={handleOnClick} isExpand={isExpand}>
			<Children>Children</Children>
		</Accordion>
	);
};
