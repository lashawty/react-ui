import {type Props} from './types.ts';
import {Wrapper, Separator, CollapsedContent} from './styled.tsx';
import {Fragment, useState} from 'react';
import BreadcrumbItem from './components/BreadcrumbItem';

const Breadcrumb = ({
	childrenList,
	collapsedElement,
	maxItems = 8,
	separator,
}: Props) => {
	const childrenLength = childrenList.length;
	const defaultIsCollapse = collapsedElement !== undefined && maxItems < childrenLength;
	const [isCollapse, setIsCollapse] = useState(defaultIsCollapse);

	if (isCollapse) {
		return (
			<Wrapper>
				<BreadcrumbItem url={childrenList[0].url}>
					{childrenList[0].children}
				</BreadcrumbItem>
				<Separator>{separator}</Separator>

				<CollapsedContent
					onClick={() => {
						setIsCollapse(!isCollapse);
					}}
				>
					{collapsedElement}
				</CollapsedContent>

				<Separator>{separator}</Separator>
				<BreadcrumbItem url={childrenList[childrenLength - 1].url}>
					{childrenList[childrenLength - 1].children}
				</BreadcrumbItem>
			</Wrapper>
		);
	}

	return (
		<Wrapper>
			{
				childrenList.map((row, index) => {
					const isLast = index === childrenLength - 1;
					return (
						<Fragment key={index}>
							<BreadcrumbItem url={row.url}>
								{row.children}
							</BreadcrumbItem>
							{isLast ? null : <Separator>{separator}</Separator>}
						</Fragment>
					);
				})
			}
		</Wrapper>
	);
};

export default Breadcrumb;
