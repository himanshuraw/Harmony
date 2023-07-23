import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchData } from '../utils/fetchData';
import { useSelector } from 'react-redux';
import Image from '../components/Image';
import SongRow from '../components/SongRow';

const color = [
	'bg-[#E8115B]',
	'bg-[#E13300]',
	'bg-[#9758FF]',
	'bg-[#1E3264]',
	'bg-[#056952]',
	'bg-[#B02897]',
	'bg-[#A56752]',
	'bg-[#C02008]',
	'bg-[#537AA1]',
	'bg-[#8D67AB]',
	'bg-[#14B708]',
	'bg-[#BA5D07]',
	'bg-[#FF0090]',
	'bg-[#E92815]',
	'bg-[#C39687]',
	'bg-[#F59B23]',
];

const PlayList = () => {
	const { id } = useParams();
	const { token } = useSelector((state) => state.user);
	const navigate = useNavigate();
	const [playlist, setPlaylist] = useState();
	const [loading, setLoading] = useState(true);
	const [random, setRandom] = useState();

	useEffect(() => {
		setRandom(Math.floor(Math.random() * color.length));
		setLoading(true);
		if (token === '') {
			navigate('/auth');
		} else {
			fetchData(`/playlists/${id}`, token).then((data) => {
				setPlaylist(data);
				console.log(data);
				setLoading(false);
			});
		}
	}, []);
	return (
		<section className=''>
			{loading ? (
				<div>loading...</div>
			) : (
				<>
					<div
						className={`flex overflow-hidden relative px-6 pb-6 ${color[random]}`}
						style={{ height: `clamp(340px, 30vh, 400px)` }}
					>
						<div className='mr-6 aspect-square w-48 xl:w-[232px] self-end shadow-lg shadow-[#363636] '>
							<Image src={playlist?.images[0]?.url} />
						</div>
						<div className='flex flex-col justify-end '>
							<div>{playlist?.type}</div>
							<div className='text-8xl font-black mt-2'>
								<h1 className='pt-[0.08em] pb-[0.12em]'>{playlist?.name}</h1>
							</div>
							<div className='text-sm font-medium opacity-70'>
								{playlist?.description}
							</div>
							<div className='flex mt-2 text-sm font-normal'>
								<div>{playlist?.tracks?.total} songs</div>
							</div>
						</div>
					</div>
					<div className='relative '>
						<div
							className={`h-[232px] ${color[random]} bg-gradient-to-t from-[#121212] to-transparent -z-10`}
						></div>
						<div className='absolute top-0 w-full bg-[#121212] bg-opacity-20'>
							<div className='px-6'>
								<div className='-mx-6 my-4 px-6 '>
									<div className='sticky grid grid-cols-[16px_6fr_4fr_3fr_minmax(120px,1fr)] grid-rows-1 gap-4 px-4 h-9 border-b text-[#b3b3b3] text-sm border-[#ffffff] border-opacity-10'>
										<div>#</div>
										<div>Title</div>
										<div>Album</div>
										<div>Date added</div>
										<div>Time</div>
									</div>
								</div>
								<div className=''>
									{playlist?.tracks?.items?.map((item, i) => (
										<div key={item?.track.id}>
											<SongRow
												track={item?.track}
												i={i++ + 1}
												date={item.added_at}
											/>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</>
			)}
		</section>
	);
};

export default PlayList;
