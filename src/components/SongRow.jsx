import { useLocation } from 'react-router-dom';
import Image from './Image';

const SongRow = ({ track, i, date }) => {
	const duration_min = Math.floor(track?.duration_ms / 60000);
	const duration_sec = Math.floor((track?.duration_ms / 1000) % 60);
	const time = `${duration_min} : ${
		duration_sec < 10 ? `0${duration_sec}` : duration_sec
	} `;
	const location = useLocation();
	const isSearch = location.pathname.slice(0, 7) === '/search';

	return (
		<div
			className={`grid ${
				isSearch
					? 'grid-cols-[4fr_minmax(120px,1fr)]'
					: 'grid-cols-[16px_6fr_4fr_3fr_minmax(120px,1fr)]'
			} grid-rows-1 gap-4 px-4 h-14  text-[#b3b3b3]`}
		>
			{isSearch ? null : <div>{i}</div>}

			<div className='flex'>
				{track?.album ? (
					<div className='w-10 aspect-square mr-4'>
						<Image src={track?.album?.images[2]?.url} />
					</div>
				) : null}
				<div className='line-clamp-1 text-ellipsis whitespace-normal mb-8'>
					{track?.name}
				</div>
			</div>
			{isSearch ? null : (
				<div className=' line-clamp-1 text-ellipsis whitespace-normal mb-8'>
					{track?.album?.name}
				</div>
			)}

			{isSearch ? null : <div>{date?.slice(0, 9)}</div>}
			<div className={` ${isSearch ? 'flex justify-end items-center' : ''}`}>
				{time}
			</div>
		</div>
	);
};

export default SongRow;
