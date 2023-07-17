import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAuth } from '../utils/getAuth';
import { getToken } from '../store/userSlice';
import { fetchData } from '../utils/fetchData';
import { getCategories } from '../store/searchSlice';

const Search = () => {
	const [loading, setLoading] = useState(true);
	const { categories } = useSelector((state) => state.search);
	const { token } = useSelector((state) => state.user);
	const dispatch = useDispatch();
	useEffect(() => {
		const params = {
			limit: 50,
		};
		setLoading(true);
		if (token === '') {
			getAuth().then((result) => {
				dispatch(getToken(result));
				fetchData('/browse/categories', result, params).then((data) => {
					dispatch(getCategories(data));
					setLoading(false);
				});
			});
		} else {
			fetchData('/browse/categories', token, params).then((data) => {
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
					{categories?.map((category) => (
						<div
							key={category?.id}
							className='rounded-lg bg-slate-300 overflow-hidden relative'
						>
							<img src={category?.icons[0]?.url} />
							<span className='absolute p-4 top-0 left-0 text-xl font-black'>
								{category?.name}
							</span>
						</div>
					))}
				</div>
			)}
		</section>
	);
};

export default Search;
