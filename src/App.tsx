import Button from './components/Button';
import {ThemeProvider} from 'styled-components';
import Switch from './components/Switch';
import {useState} from 'react';

function App() {
	const theme = {
		main: 'primary',
	};

	// Switch temp
	const [isChecked, setIsChecked] = useState(false);
	const handleOnChange = () => {
		setIsChecked(!isChecked);
	};

	return (
		<ThemeProvider theme={theme}>
			<Button variant='text'>button</Button>
			<Switch
				checkedChildren='✓'
				unCheckedChildren='❌'
				isChecked={isChecked}
				onChange={handleOnChange}
			/>
		</ThemeProvider>
	);
}

export default App;

