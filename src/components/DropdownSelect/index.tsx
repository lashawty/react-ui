import {useState} from 'react';
import Dropdown from './components/Dropdown';
import {Menu, MenuItem, SelectBox, ArrowDown, LoadingWrapper} from './styled';
import {type Props} from './types';
import {useToggleActive} from '@/utils/hooks';

/**
 * `DropdownSelect`
*/
const DropdownSelect = ({
	options,
	loadingChildren,
	arrowChildren,
	placeholder = 'Please select',
	placement = 'bottom',
	isDisabled = false,
	isLoading = false,
}: Props) => {
	const {isActive, handleToggleActive} = useToggleActive(false);
	const [value, setValue] = useState(placeholder);
	const foundOption = options.find(option => option.code === value);
	const isOpen = !isDisabled && !isLoading && isActive;
	const overlay = (
		<Menu>
			{
				options.map(option => (
					<MenuItem
						key={option.code}
						role='presentation'
						$isSelected={option.code === value}
						onClick={() => {
							handleOnClickMenuItem(option.code);
						}}
					>
						{option.name}
					</MenuItem>
				))
			}
		</Menu>
	);

	const handleOnClickDropdown = () => {
		if (!isDisabled || !isLoading) {
			handleToggleActive(!isActive);
		}
	};

	const handleOnClickMenuItem = (value: string) => {
		setValue(value);
		handleToggleActive(false);
	};

	return (
		<Dropdown
			onClick={handleOnClickDropdown}
			placement={placement}
			overlay={overlay}
			isActive={isOpen}
		>
			<SelectBox $isDisabled={isDisabled || isLoading}>
				<span>{foundOption?.name ?? placeholder}</span>
				{
					isLoading ? (
						<LoadingWrapper>
							{loadingChildren}
						</LoadingWrapper>
					) : (
						<ArrowDown $isOpen={isOpen}>
							{arrowChildren}
						</ArrowDown>
					)
				}
			</SelectBox>
		</Dropdown>
	);
};

export default DropdownSelect;
