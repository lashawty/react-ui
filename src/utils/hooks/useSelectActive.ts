import {useState} from 'react';

export const useSelectActive = <T>(defaultSelected?: T) => {
	const [selected, setSelected] = useState<T | undefined>(defaultSelected);
	const handleOnSelect = (value: T) => {
		setSelected(value);
	};

	return {
		selected,
		handleOnSelect,
	};
};
