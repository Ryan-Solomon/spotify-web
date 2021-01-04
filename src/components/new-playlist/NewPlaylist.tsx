import './NewPlaylist.styles.scss';
import { AiOutlinePlusCircle } from 'react-icons/ai';

export const NewPlaylist = () => {
  return (
    <div className='new-playlist'>
      <span>
        <AiOutlinePlusCircle size={20} />{' '}
      </span>{' '}
      <h2>New Playlist</h2>
    </div>
  );
};
