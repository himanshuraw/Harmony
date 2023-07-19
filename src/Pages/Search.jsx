import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../utils/fetchData';
import { getCategories } from '../store/searchSlice';
import { useNavigate } from 'react-router-dom';

const Search = () => {
	const [loading, setLoading] = useState(true);
	const { categories } = useSelector((state) => state.search);
	const { token } = useSelector((state) => state.user);
	const navigate = useNavigate();
	const color = [
		'bg-[#E8115B]',
		'bg-[#E13300]',
		'bg-[#9758FF]',
		'bg-[#1E3264]',
		'bg-[#056952]',
		'bg-[#B02897]',
		'bg-[#A56752]',
		'bg-[#777777]',
		'bg-[#537AA1]',
		'bg-[#8D67AB]',
		'bg-[#14B708]',
		'bg-[#BA5D07]',
		'bg-[#FF0090]',
		'bg-[#E92815]',
		'bg-[#C39687]',
		'bg-[#F59B23]',
	];

	const dispatch = useDispatch();

	useEffect(() => {
		const params = {
			limit: 50,
		};
		setLoading(true);
		if (token === '') {
			navigate('/auth');
		} else {
			fetchData('/browse/categories', token, params).then((data) => {
				console.log(data);
				dispatch(getCategories(data));
				setLoading(false);
			});
		}
	}, []);

	return (
		<section className='flex flex-col'>
			<div className='font-black text-xl mt-8 mb-4'>Browse all</div>
			{loading === true ? (
				<div>loading...</div>
			) : (
				<div className='grid grid-cols-4  lg:grid-cols-7 gap-6'>
					{categories?.map((category) => {
						const random = Math.floor(Math.random() * color.length);
						return (
							<div
								key={category?.id}
								className={`rounded-lg ${color[random]} overflow-hidden aspect-square relative`}
								onClick={() => navigate(`/genre/${category.id}`)}
							>
								<img
									src={category?.icons[0]?.url}
									style={{
										position: 'absolute',
										bottom: 0,
										right: 0,
										transform: 'rotate(24deg) translate(18%, -2%)',
									}}
									className='w-[100px] aspect-square'
								/>
								<span className='absolute p-4 top-0 left-0 text-xs sm:text-base md:text-lg  lg:text-xl font-black'>
									{category?.name}
								</span>
							</div>
						);
					})}
				</div>
			)}
		</section>
	);
};

export default Search;
