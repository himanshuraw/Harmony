import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Header = () => {
	const navigate = useNavigate();
	return (
		<header className='fixed h-16 py-4 px-6 w-full bg-[#242424] opacity-40 rounded-t-lg -mx-6 -mt-2'>
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
		</header>
	);
};

export default Header;
