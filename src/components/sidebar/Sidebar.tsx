import { NewPlaylist } from '../new-playlist/NewPlaylist';
import { SidebarSection } from './sidebar-section/SidebarSection';
import './Sidebar.styles.scss';
import { data } from './sidebarData';

export const Sidebar = () => {
  return (
    <nav className='sidebar'>
      {data.map((section) => {
        return <SidebarSection section={section} />;
      })}
      <NewPlaylist />
    </nav>
  );
};
