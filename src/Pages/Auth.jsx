import { useEffect } from 'react';
import { getAuth } from '../utils/getAuth';
import { useDispatch } from 'react-redux';
import { getToken } from '../store/userSlice';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	useEffect(() => {
		getAuth()
			.then((result) => {
				dispatch(getToken(result));
			})
			.then(() => navigate(-1) || navigate('/'));
	}, []);
	return (
		<>
			<div className='flex justify-center items-center text-white'>
				<h1>Authenticating and generating token</h1>
			</div>
		</>
	);
};

export default Auth;
