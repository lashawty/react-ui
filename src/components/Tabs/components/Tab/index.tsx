
import {type Props} from './types';
import {StyledTab} from './styled';
import {useEffect, useState, useRef} from 'react';

const Tab = ({
	isActive,
	color,
	handleClickTab,
	label,
	handleActiveTab,
}: Props) => {
	const ref = useRef<HTMLDivElement>(null);
	const [width, setWidth] = useState(0);
	const [left, setLeft] = useState(0);

	useEffect(() => {
		if (ref?.current) {
			setWidth(ref.current.offsetWidth);
			setLeft(ref.current.offsetLeft);

			if (isActive) {
				handleActiveTab({width, left});
			}
		}
	}, [ref?.current?.offsetWidth]);

	const handleOnClick = () => {
		handleClickTab();
		handleActiveTab({width, left});
	};

	return (
		<StyledTab
			$isActive={isActive}
			$color={color}
			onClick={handleOnClick}
			ref={ref}
		>
			{label}
		</StyledTab>
	);
};

export default Tab;
