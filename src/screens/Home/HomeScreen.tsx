import React from 'react';
import { Album } from '../../components/album/Album';
import { Sidebar } from '../../components/sidebar/Sidebar';
import './HomeScreen.styles.scss';

export const HomeScreen = () => {
  return (
    <main className='home-screen'>
      <Sidebar />
      <Album />
    </main>
  );
};
