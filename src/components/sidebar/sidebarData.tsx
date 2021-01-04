export const data = [
  {
    id: 1,
    title: 'Main',
    items: ['Home', 'Browse', 'Radio'],
  },
  {
    id: 2,
    title: 'Your Library',
    items: [
      'Made For You',
      'Recently Played',
      'Liked Songs',
      'Albums',
      'Artists',
      'Podcasts',
    ],
  },
  {
    id: 3,
    title: 'Playlists',
    items: ['Mumford and Sons', 'Gym Songs', 'Coding'],
  },
];

export type TSidebarData = typeof data[0];
