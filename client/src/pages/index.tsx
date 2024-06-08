import { NavBar } from '@/widgets/navBar';
import { Route, Routes } from 'react-router-dom';
import { AuthPage } from './auth';
import { Page } from './charts';
import { MainPage } from './main';

export const Routing = () => {
	return (
		<Routes>
			<Route element={<NavBar />}>
				<Route path='/' element={<MainPage />} />
				<Route path='/stat' element={<Page />} />
			</Route>
			<Route path='/auth' element={<AuthPage />} />
		</Routes>
	);
};
