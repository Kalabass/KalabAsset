import { useNavigate } from 'react-router-dom';
import { removeTokenFromLocalStorage } from '../../../shared/lib/localStorage.helper';

export const LogOut: React.FC = () => {
	const navigate = useNavigate();

	const onClickHandler = () => {
		removeTokenFromLocalStorage();
		navigate('/auth');
	};
	return <div onClick={onClickHandler}> logOut</div>;
};
