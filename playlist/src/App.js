import './App.css';
import { useDispatch } from 'react-redux';
import MoviePlaylist from './components/MoviePlaylist';
import SongPlaylist from './components/SongPlaylist';
import { reset } from './store/actions';

export default function App() {
  const dispatch = useDispatch();
  const handleResetClick = () => {
    dispatch(reset());
  };

  return (
    <div>
      <h3 className="title">Movie and Song Favs</h3>
      <button onClick={() => handleResetClick()} className="reset-button">
        Reset Both Playlists
      </button>
      <MoviePlaylist />
      <SongPlaylist />
    </div>
  );
}
