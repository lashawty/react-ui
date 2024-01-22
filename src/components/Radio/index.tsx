import {type Props} from './types.ts';
import {RadioRoot, RadioValue, StyledRadio} from '@/components/Radio/styled.tsx';
import {useColor} from '@/utils/hooks/useColor.ts';
import {useState} from 'react';

/**
 * Toggle Radio
 */
const Radio = ({
	isDisabled = false,
	themeColor = 'primary',
	value,
}: Props) => {
	const {makeColor} = useColor();
	const color = makeColor({themeColor, isDisabled});
	const [isChecked, setIsChecked] = useState(false);

	const handleOnClickRadio = () => {
		setIsChecked(!isChecked);
	};

	return (
		<RadioRoot onClick={handleOnClickRadio}>
			<StyledRadio $color={color} $isChecked={isChecked}/>
			{value && <RadioValue $color={color}>{value}</RadioValue>}
		</RadioRoot>
	);
};

export default Radio;
