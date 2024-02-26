import Tab from './components/Tab';
import {type Props} from './types';
import {type TabWidth} from './components/Tab/types';
import {useState} from 'react';
import {TabsScrollerWrapper, StyledTabGroup, Indicator} from './styled';
import {useColor} from '@/utils/hooks';

const Tabs = ({
	className,
	options,
	onChange,
	themeColor = 'primary',
}: Props) => {
	const {makeColor} = useColor();
	const color = makeColor({themeColor});
	const [activeIndex, setActiveIndex] = useState(0);
	const [activeTab, setActiveTab] = useState<TabWidth>({width: 0, left: 0});
	const handleClickTab = (tabValue: string, tabIndex: number) => {
		if (onChange) {
			onChange(tabValue);
		}

		setActiveIndex(tabIndex);
	};

	const handleActiveTab = (activeTab: TabWidth) => {
		setActiveTab(activeTab);
	};

	return (
		<TabsScrollerWrapper className={className}>
			<StyledTabGroup>
				{options.map((option, index) => (
					<Tab
						key={index}
						handleActiveTab={handleActiveTab}
						handleClickTab={() => {
							handleClickTab(option, index);
						}}
						color={color}
						label={option}
						isActive={index === activeIndex}
					/>
				))}
			</StyledTabGroup>
			<Indicator
				$left={activeTab.left}
				$width={activeTab.width}
				$color={color}
			/>
		</TabsScrollerWrapper>
	);
};

export default Tabs;
