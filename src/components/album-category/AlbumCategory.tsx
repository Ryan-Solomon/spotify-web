import './AlbumCategory.scss';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import { Album } from '../album/Album';

export const AlbumCategory = () => {
  return (
    <section className='album-category'>
      <header className='album-category__header'>
        <h3>Album Category Header</h3>
        <div className='album-category__buttons'>
          <button>
            <AiOutlineLeft color='white' />
          </button>
          <button>
            <AiOutlineRight color='white' />
          </button>
        </div>
      </header>
      <section className='album-category__albums'>
        <Album />
        <Album />
        <Album />
        <Album />
      </section>
    </section>
  );
};
