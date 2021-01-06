import './Album.styles.scss';
import img from '../../assets/img/efe-kurnaz-RnCPiXixooY-unsplash.jpg';

export const Album = () => {
  return (
    <section className='album-container'>
      <div style={{ backgroundImage: `url(${img})` }} className='album-photo'>
        <h3>Album Title</h3>
      </div>
      <div className='album-details'>
        <h3>Album Title</h3>
        <p>Album artist 1, album artist 2, album artest 3, and more</p>
      </div>
    </section>
  );
};
