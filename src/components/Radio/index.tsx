import {type Props} from './types.ts';
import {RadioRoot, Label, StyledRadio, Check} from '@/components/Radio/styled.tsx';
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
		<RadioRoot onClick={handleOnClickRadio} $color={color} $isChecked={isChecked} $isDisabled={isDisabled}>
			<StyledRadio type='button' role='radio'>
				<Check />
			</StyledRadio>
			<Label>{value}</Label>
		</RadioRoot>
	);
};

export default Radio;
