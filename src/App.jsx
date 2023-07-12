import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import PlayList from './Pages/PlayList';
import Track from './Pages/Track';
import Artist from './Pages/Artist';
import Search from './Pages/Search';
import Sidebar from './components/Sidebar';
import { useEffect, useState } from 'react';
import { getAuth } from './utils/getAuth';
import { useDispatch, useSelector } from 'react-redux';
import { getToken } from './store/userSlice';
import { fetchData } from './utils/fetchData';
import { getGenres } from './store/songSlice';
import Auth from './Pages/Auth';
function App() {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const { token } = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		if (token === '') {
			getAuth().then((result) => {
				dispatch(getToken(result));
				fetchData('/recommendations/available-genre-seeds', result)
					.then((data) => dispatch(getGenres(data)))
					.then(() => navigate('/home'));
			});
		}
	}, []);

	return (
		<div className='block h-[100vh] bg-black p-2'>
			<div className='h-[89%] flex'>
				<Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
				<div className='grow overflow-scroll'>
					<Routes>
						<Route path='/' element={<Auth />} />
						<Route path='/home' element={<Home />} />
						<Route path='/search' element={<Search />} />
						<Route path='/playlist/:playlist_id' element={<PlayList />} />
						<Route path='/tracks/:id' element={<Track />} />
						<Route path='/artists/:id' element={<Artist />} />
					</Routes>
				</div>
			</div>
		</div>
	);
}

export default App;
