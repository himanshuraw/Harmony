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
		setLoading(true);
		if (token === '') {
			getAuth().then((result) => {
				dispatch(getToken(result));
				fetchData('/browse/categories', result).then((data) => {
					dispatch(getCategories(data));
					setLoading(false);
				});
			});
		} else {
			fetchData('/browse/categories', token).then((data) => {
				dispatch(getCategories(data));
				setLoading(false);
			});
		}
	}, []);

	return (
		<div className='h-[200vh]'>
			{loading === true ? (
				<div>loading...</div>
			) : (
				<div>
					{categories?.map((category) => (
						<div key={category?.id}>
							<img src={category?.icons[0]?.url} />
							<div>{category?.name}</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Search;
