import BannerItems from './BannerItems';
import Greeting from './Greeting';

const Banner = () => {
	return (
		<div className='mb-4'>
			<Greeting />
			<BannerItems />
		</div>
	);
};

export default Banner;
