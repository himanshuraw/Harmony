import { useEffect } from 'react';
import Banner from '../components/Banner';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = () => {
	const { token } = useSelector((state) => state.user);
	const navigate = useNavigate();

	useEffect(() => {
		if (token === '') {
			navigate('auth');
		}
	}, []);
	return (
		<>
			<Banner />
		</>
	);
};

export default Home;
