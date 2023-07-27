import { useCallback } from 'react';
import { BsSearch } from 'react-icons/bs';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const debounce = (handleSearch, delay) => {
		let timer;
		return (...args) => {
			const context = this;
			if (timer) {
				clearTimeout(timer);
			}
			timer = setTimeout(() => {
				timer = null;
				handleSearch.apply(context, args);
			}, delay);
		};
	};

	const handleSearch = (event) => {
		let query = event.target.value;
		navigate(`search/${query}`);
	};

	const debouncedSearch = useCallback(debounce(handleSearch, 300), []);

	return (
		<header className='flex gap-2 items-center h-16 py-4 px-6 bg-[#242424] bg-opacity-50 rounded-t-lg'>
			<div className='flex flex-row items-center gap-2'>
				<div
					className='bg-[#000000]  flex justify-center items-center h-8 w-8 rounded-full hover:cursor-pointer'
					onClick={() => navigate(-1)}
				>
					<MdArrowBackIosNew size={16} color='#FFFFFF' />
				</div>
				<div
					className='bg-[#000000] flex justify-center items-center h-8 w-8 rounded-full hover:cursor-pointer'
					onClick={() => navigate(1)}
				>
					<MdArrowForwardIos size={16} color='#FFFFFF' />
				</div>
			</div>
			{location.pathname.slice(0, 7) !== '/search' ? null : (
				<div className='w-[364px] relative'>
					<input
						placeholder='What do you want to listen to?'
						className='bg-[#2a2a2a] shadow-md px-9 py-[6px] h-12 w-full rounded-full text-sm tracking-[0.012em]'
						onChange={debouncedSearch}
					/>
					<div className='flex items-center absolute top-0 left-3 h-12 '>
						<BsSearch />
					</div>
				</div>
			)}
		</header>
	);
};

export default Header;
