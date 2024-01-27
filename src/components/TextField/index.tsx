import type {Props} from './types';
import {StyledTextarea, Textarea} from '@/components/Textfield/styled.tsx';
import {useColor} from '@/utils/hooks/useColor.ts';

/**
 * TextField
 */
const TextField = ({
	className,
	prefix,
	suffix,
	placeholder,
	onChange,
	isError = false,
	isDisabled = false,
	themeColor = 'primary',
}: Props) => {
	const {makeColor} = useColor();
	const color = makeColor({themeColor, isDisabled});

	return (
		<StyledTextarea
			className={className}
			$isError={isError}
			$isDisabled={isDisabled}
			$color={color}
		>
			{prefix}
			<Textarea
				className='text-field__input'
				disabled={isDisabled}
				placeholder={placeholder}
				onChange={onChange}
			/>
			{suffix}
		</StyledTextarea>
	);
};

export default TextField;
