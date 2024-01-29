import {useRef, useState, type ChangeEvent} from 'react';
import {useColor} from '@/utils/hooks/useColor';
import {StyledSlider} from './styled';
import {type Props} from './types';

const Slider = ({
	defaultValue = 0,
	min = 0,
	max = 100,
	step = 1,
	themeColor = 'primary',
	onChange,
	isDisabled = false,
}: Props) => {
	const sliderRef = useRef<HTMLInputElement>(null);
	const [currentValue, setCurrentValue] = useState(defaultValue);
	const {makeColor} = useColor();
	const color = makeColor({themeColor, isDisabled});

	const handleOnChange = (event: ChangeEvent) => {
		setCurrentValue(Number(sliderRef?.current?.value));
		if (onChange) {
			onChange(event);
		}
	};

	return (
		<StyledSlider
			ref={sliderRef}
			$widthRatio={(currentValue / max) * 100}
			$color={color}
			$isDisabled={isDisabled}
			type='range'
			min={min}
			max={max}
			step={step}
			defaultValue={defaultValue}
			onChange={handleOnChange}
		/>
	);
};

export default Slider;
