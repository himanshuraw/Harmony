import { useEffect, useState } from 'react';
import { getAuth } from '../utils/getAuth';
import { fetchData } from '../utils/fetchData';
import { useDispatch, useSelector } from 'react-redux';
import { getToken } from '../store/userSlice';

const useFetch = (url, params) => {
	const { token } = useSelector((state) => state.user);
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(null);
	const [error, setError] = useState(null);
	const dispatch = useDispatch();

	useEffect(() => {
		setLoading('loading...');
		setData(null);
		setError(null);

		console.log(token);

		if (token === '') {
			getAuth().then((result) => {
				dispatch(getToken(result));

				fetchData(url, result, params)
					.then((res) => {
						setLoading(false);
						setData(res);
						console.log(res);
					})
					.catch((err) => {
						setLoading(false);
						setError('Something went wrong!', err);
					});
			});
		} else {
			fetchData(url, token, params)
				.then((res) => {
					setLoading(false);
					setData(res);
					console.log(res);
				})
				.catch((err) => {
					setLoading(false);
					setError('Something went wrong!', err);
				});
		}
	}, [url]);
	return { data, loading, error };
};

export default useFetch;
