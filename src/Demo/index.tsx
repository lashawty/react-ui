import {Intro, Link, List, ListWrapper, Title} from './styled.tsx';
import {demos} from './config';

const link = 'https://github.com/lashawty/react-ui/tree/main/src/components/';

const Demo = () => (
	<section>
		<Title>Not A Library</Title>
		<Intro>React UI</Intro>
		<Intro>Based on React, Typescript, styled-components</Intro>
		<ListWrapper>
			{demos.map(demo => {
				const url = demo.github ? demo.github : `${link}${demo.label}`;

				return (
					<List key={demo.label}>
						<Link href={url} target='_blank'>{demo.label}</Link>
						{demo.component}
					</List>
				);
			})}
		</ListWrapper>
		<Intro>Designed by Sean</Intro>
	</section>
);

export default Demo;
