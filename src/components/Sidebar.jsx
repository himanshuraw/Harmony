import { BsSearch } from 'react-icons/bs';
import { GoHomeFill } from 'react-icons/go';
import { MdOutlineLibraryMusic, MdLibraryMusic } from 'react-icons/md';
import Tab from './Tab';

const Sidebar = ({ isOpen, setIsOpen }) => {
	const handleOpen = () => {
		setIsOpen(!isOpen);
	};
	return (
		<div
			className={`flex flex-col gap-2  h-full ${
				isOpen ? 'w-[350px]' : 'w-[72px]'
			}`}
		>
			<ul
				className={`flex flex-col bg-[#121212] px-3 py-2 rounded-lg w-full ${
					isOpen ? '' : 'items-center'
				}`}
			>
				<Tab Icon={GoHomeFill} Title='Home' isOpen={isOpen} to='home' />
				<Tab Icon={BsSearch} Title='Search' isOpen={isOpen} to='search' />
			</ul>
			<div
				className={`flex flex-col bg-[#121212] flex-grow px-3 py-2 rounded- w-full 
					${isOpen ? '' : 'items-center'}`}
			>
				<div className='h-10 flex items-center' onClick={handleOpen}>
					{!isOpen ? (
						<MdOutlineLibraryMusic size={24} color='#A7A7A7' />
					) : (
						<div className='flex px-2 py-1'>
							<MdLibraryMusic size={24} color='#A7A7A7' className='mr-3' />
							<span className='text-[#A7A7A7]'>Your Library</span>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
