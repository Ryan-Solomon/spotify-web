import React from 'react';
import { AlbumCategory } from '../../components/album-category/AlbumCategory';
import { Header } from '../../components/header/Header';
import { Sidebar } from '../../components/sidebar/Sidebar';
import './HomeScreen.styles.scss';

export const HomeScreen = () => {
  return (
    <main className='home-screen'>
      <section className='side-bar'>
        <Sidebar />
      </section>

      <section className='main'>
        <Header />
        <AlbumCategory />
        <AlbumCategory />
        <AlbumCategory />
        <AlbumCategory />
      </section>
    </main>
  );
};
