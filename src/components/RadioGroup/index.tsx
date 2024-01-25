import {type Value, type Props} from './types.ts';
import {StyledRadioGroup} from './styled';
import Radio from './components/Radio';
import {useRadio} from './hooks/useRadio.tsx';
import {useColor} from '@/utils/hooks/useColor.ts';

/**
 * `RadioGroup`
 */
const RadioGroup = ({
	radios = [],
	columns = 1,
	isDisabled = false,
	themeColor = 'primary',
	onChange,
}: Props) => {
	const {value, handleSetValue, handleClear} = useRadio();
	const {makeColor} = useColor();
	const color = makeColor({themeColor, isDisabled});

	const handleOnChange = (value: Value) => {
		if (onChange) {
			onChange();
		}

		handleSetValue(value);
	};

	return (
		<StyledRadioGroup
			$columns={columns || 1}
			$isDisabled={isDisabled}
		>
			{radios.map((radio, i) =>
				<Radio
					key={i}
					value={radio.value}
					isChecked={value === radio.value}
					onClick={() => {
						handleOnChange(radio.value);
					}}
					color={color}
				/>,
			)}
			{!isDisabled && <button onClick={handleClear} value='clear'>Clear</button>}
		</StyledRadioGroup>
	);
};

export default RadioGroup;
