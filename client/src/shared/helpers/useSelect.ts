import { useState } from 'react';

export function useSelect<T>(initOption: T) {
	const [value, setValue] = useState<T>(initOption);

	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setValue(e.target.value as unknown as T);
	};

	const selectProps = {
		value: value,
		onChange: handleChange,
	};

	return selectProps;
}
