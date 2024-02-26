import {Intro, Link, List, ListWrapper, Title, Wrapper} from './styled.tsx';
import {demos} from './config';
import {useState} from 'react';
import Accordion from '@/components/Accordion/index.tsx';

const link = 'https://github.com/lashawty/react-ui/tree/main/src/components/';

const Demo = () => {
	const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined);
	const handleOnClick = (index: number) => {
		if (activeIndex === index) {
			setActiveIndex(undefined);
		} else {
			setActiveIndex(index);
		}
	};

	return (
		<section>
			<Title>Not A Library</Title>
			<Intro>React UI</Intro>
			<Intro>Based on React, Typescript, styled-components</Intro>
			<ListWrapper>
				{demos.map((demo, index) => {
					const url = demo.github ? demo.github : `${link}${demo.label}`;

					return (
						<List key={demo.label}>
							<Accordion
								isExpand={activeIndex === index}
								onClick={() => {
									handleOnClick(index);
								}}
								header={<Link href={url} target='_blank'>{demo.label}</Link>}>
								<Wrapper>
									{demo.component}
								</Wrapper>
							</Accordion>
						</List>
					);
				})}
			</ListWrapper>
			<Intro>Designed by Sean</Intro>
		</section>
	);
};

export default Demo;
