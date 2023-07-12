import { useNavigate } from 'react-router-dom';

const Tab = ({ Icon, Title, isOpen, to }) => {
	const navigate = useNavigate();

	const handleNav = (endpoint) => {
		navigate(`/${endpoint.to}`);
	};
	return (
		<>
			<li className=' px-3 py-1 hover:cursor-pointer'>
				<div
					className='h-10  flex items-center gap-5'
					onClick={() => handleNav({ to })}
				>
					<Icon size={24} color='#FFFFFF' />
					<span className={`${!isOpen ? 'hidden' : ''} text-white`}>
						{Title}
					</span>
				</div>
			</li>
		</>
	);
};

export default Tab;
