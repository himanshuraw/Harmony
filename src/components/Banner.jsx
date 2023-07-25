import BannerItems from './BannerItems';
import Greeting from './Greeting';

const Banner = ({ data }) => {
	return (
		<div className='mb-4'>
			<Greeting />
			<BannerItems data={data} />
		</div>
	);
};

export default Banner;
