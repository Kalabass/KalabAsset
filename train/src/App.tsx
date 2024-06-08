import { useCallback, useState } from 'react';
import './App.css';
import Child from './Child';

function App() {
	const [count, setCount] = useState(0);
	const increment = useCallback(() => {
		setCount(count + 1);
	}, [count]);
	return (
		<>
			<Child onClick={increment} />
			<div>{count}</div>
		</>
	);
}

export default App;
