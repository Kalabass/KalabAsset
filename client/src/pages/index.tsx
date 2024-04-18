import { Route, Routes } from 'react-router-dom';
import { AuthPage } from './auth';
import { MainPage } from './main';

export const Routing = () => {
	return (
		<Routes>
			<Route path='/' element={<MainPage />} />
			<Route path='/auth' element={<AuthPage />} />
		</Routes>
	);
};
