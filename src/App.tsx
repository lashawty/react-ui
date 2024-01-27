import {ThemeProvider} from 'styled-components';
import {theme} from './theme';
import Demo from '@/Demo';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Demo />
		</ThemeProvider>
	);
}

export default App;

