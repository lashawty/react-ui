import {Label, Root, StyledInput} from './styled';

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
	placeholder = 'Enter your text here',
	label = '',
	name = '',
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
		<Root>
			<Label>{label}</Label>
			<StyledInput
				ref={ref}
				onInput={handleChangeValue}
				data-value={value}
				type={type}
				$color={color}
				$isDisabled={isDisabled}
				placeholder={placeholder}
				name={name}
				autoComplete={type}
			/>
		</Root>
	);
};

export default Input;
