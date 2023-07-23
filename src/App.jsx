import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import PlayList from './Pages/PlayList';
import Track from './Pages/Track';
import Artist from './Pages/Artist';
import Search from './Pages/Search';
import Sidebar from './components/Sidebar';
import { useState } from 'react';
import Auth from './Pages/Auth';
import Header from './components/Header';
import Genre from './Pages/Genre';
import SearchResult from './Pages/SearchResult';
function App() {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	return (
		<div className='block h-[100vh] bg-black p-2'>
			<div className='h-[89%] flex gap-2'>
				<Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

				<div className='grow overflow-scroll no-scrollbar block bg-[#121212] rounded-lg'>
					<div className='fixed z-10 w-[100%] pr-24'>
						<Header />
					</div>
					<Routes>
						<Route path='/auth' element={<Auth />} />
						<Route path='/' element={<Home />} />
						<Route path='/search' element={<Search />} />
						<Route path='/search/:q' element={<SearchResult />} />
						<Route path='/playlist/:id' element={<PlayList />} />
						<Route path='/track/:id' element={<Track />} />
						<Route path='/artist/:id' element={<Artist />} />
						<Route path='/genre/:id' element={<Genre />} />
					</Routes>
				</div>
			</div>
		</div>
	);
}

export default App;
