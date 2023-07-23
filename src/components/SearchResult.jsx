import { useParams } from 'react-router-dom';

const SearchResult = () => {
	const { q } = useParams();
	return <div className='m-16'>SearchResult {q}</div>;
};

export default SearchResult;
