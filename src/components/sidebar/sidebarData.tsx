export type TSidebarSection = {
  id: number;
  title: string;
  items: string[];
};

export type TSidebarData = TSidebarSection[];

export const data: TSidebarData = [
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
