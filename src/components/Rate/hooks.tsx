import {useEffect, useState} from 'react';
import {type Hooks} from './types';

export const useRate = ({
	defaultValue = 0,
	character = '',
	isDisabled = false,
	onChange,
}: Hooks) => {
	const [innerValue, setInnerValue] = useState(defaultValue);
	const [previewValue, setPreviewValue] = useState(innerValue);
	const isString = typeof character === 'string';

	const handleOnClick = (clickedValue: number) => {
		if (isDisabled) {
			return;
		}

		setInnerValue(previousValue => (previousValue === clickedValue ? 0 : clickedValue));
	};

	const handleChangePreviewValue = (currentValue: number) => {
		if (!isDisabled) {
			setPreviewValue(currentValue);
		}
	};

	useEffect(() => {
		if (onChange) {
			onChange();
		}
	}, [innerValue]);

	return {
		isString,
		innerValue,
		previewValue,
		handleChangePreviewValue,
		handleOnClick,
	};
};
