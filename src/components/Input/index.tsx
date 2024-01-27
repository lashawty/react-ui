import {StyledInput} from './styled';

import {useColor} from '@/utils/hooks/useColor';
import {type Props} from './types.ts';
import {useRef, useState} from 'react';

/**
 * Input
 */
const Input = ({
	themeColor = 'primary',
	isDisabled = false,
	type = 'text',
	placeholder = type?.toUpperCase(),
}: Props) => {
	const {makeColor} = useColor();
	const color = makeColor({themeColor, isDisabled});
	const ref = useRef<HTMLInputElement>(null);

	// Notice: value, data-value is for demo only
	const [value, setValue] = useState('');
	const handleChangeValue = () => {
		if (ref?.current?.value) {
			setValue(ref.current.value);
		}
	};

	return (
		<StyledInput
			ref={ref}
			onInput={handleChangeValue}
			data-value={value}
			type={type}
			$color={color}
			placeholder={placeholder}
		/>
	);
};

export default Input;
