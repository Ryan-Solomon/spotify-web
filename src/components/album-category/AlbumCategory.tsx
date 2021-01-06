import './AlbumCategory.scss';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import { Album } from '../album/Album';

export const AlbumCategory = () => {
  return (
    <section className='album-category'>
      <header className='album-category__header'>
        <h3>Album Category Header</h3>
        <button>
          <AiOutlineLeft />
        </button>
        <button>
          <AiOutlineRight />
        </button>
      </header>
      <Album />
      <Album />
      <Album />
      <Album />
    </section>
  );
};
