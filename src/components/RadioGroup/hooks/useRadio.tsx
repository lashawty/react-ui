import {useState} from 'react';
import {type Value} from '../types';

export const useRadio = () => {
	const [value, setValue] = useState<undefined | Value>(undefined);

	const handleSetValue = (value: Value) => {
		setValue(value);
	};

	const handleClear = () => {
		setValue(undefined);
	};

	return {value, handleSetValue, handleClear};
};
