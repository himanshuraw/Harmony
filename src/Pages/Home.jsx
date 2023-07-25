import { useEffect } from 'react';
import Banner from '../components/Banner';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Featured from '../components/Featured';
import NewReleased from '../components/NewReleased';
import ByArtist from '../components/ByArtist';

const Home = () => {
	return (
		<section className='mt-16 lg:px-6 '>
			<div className='pt-2 '>
				<div className='flex flex-col gap-6 px-4'>
					<Banner />
					<Featured />
					<NewReleased />
					<ByArtist />
				</div>
			</div>
		</section>
	);
};

export default Home;
