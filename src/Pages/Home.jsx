import useFetch from '../hooks/useFetch';

const Home = () => {
	const params = {
		ids: '382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc,15CyNDuGY5fsG0Hn9rjnpG',
	};
	const { data, loading } = useFetch('/albums', params);

	return (
		<>
			<div>
				{loading ? (
					<div className='text-white'> loading</div>
				) : (
					data?.albums?.map((d, i = 0) => {
						return (
							<div key={i++}>
								<img src={d?.images[2]?.url} />
								<div className='text-white'>{d.name}</div>
							</div>
						);
					})
				)}
			</div>
		</>
	);
};

export default Home;
