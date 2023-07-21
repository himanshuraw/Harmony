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
		<section className='mt-16 pt-2 px-4 lg:px-6 '>
			<Banner />
		</section>
	);
};

export default Home;
