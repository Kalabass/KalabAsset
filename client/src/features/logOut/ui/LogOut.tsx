import { removeTokenFromLocalStorage } from '@/shared/lib/localStorage.helper';
import { useNavigate } from 'react-router-dom';

export const LogOut: React.FC = () => {
	const navigate = useNavigate();

	const onClickHandler = () => {
		removeTokenFromLocalStorage();
		navigate('/auth');
	};
	return <div onClick={onClickHandler}> logOut</div>;
};
