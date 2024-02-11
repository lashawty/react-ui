import {type Props} from './types.ts';
import {useSelectActive} from '@/utils/hooks';
import {StyledSelect} from './styled.tsx';
import {type ChangeEvent} from 'react';

/**
 * `Select` 是一個下拉選擇器。觸發時能夠彈出一個菜單讓用戶選擇操作。
 */
const Select = ({
	options,
	onSelect,
	placeholder = 'select',
}: Props) => {
	const {selected, handleOnSelect} = useSelectActive(options[0].code);
	const handleOnChange = (event: ChangeEvent<HTMLSelectElement>) => {
		if (onSelect) {
			onSelect();
		}

		handleOnSelect(event.target.value);
	};

	return (
		<StyledSelect value={selected} onChange={handleOnChange} aria-placeholder={placeholder}>
			{
				options.map((option, i) => (
					<option key={i} value={option.code}>
						{option.name}
					</option>
				))
			}
		</StyledSelect>
	);
};

export default Select;
