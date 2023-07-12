import useFetch from '../hooks/useFetch';

const Search = () => {
	const params = {
		q: 'something',
		type: 'album',
	};
	const { data, loading } = useFetch('/search', params);
	return (
		<>
			{loading ? (
				<div className='text-white'>loading</div>
			) : (
				data?.albums?.items?.map((item) => (
					<>
						<img src={item.images[2].url} />
						<div className='text-white' key={item.id}>
							{item.name}
						</div>
					</>
				))
			)}
		</>
	);
};

export default Search;
