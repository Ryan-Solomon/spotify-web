import React from 'react';
import { AlbumCategory } from '../../components/album-category/AlbumCategory';
import { Sidebar } from '../../components/sidebar/Sidebar';
import './HomeScreen.styles.scss';

export const HomeScreen = () => {
  return (
    <main className='home-screen'>
      <section className='side-bar'>
        <Sidebar />
      </section>
      <section className='album-category'>
        <AlbumCategory />
      </section>
    </main>
  );
};
