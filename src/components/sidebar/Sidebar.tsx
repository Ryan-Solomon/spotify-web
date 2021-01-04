import { SidebarSection } from './sidebar-section/SidebarSection';
import './Sidebar.styles.scss';
import { data } from './sidebarData';

export const Sidebar = () => {
  return (
    <>
      {data.map((section) => {
        return <SidebarSection section={section} />;
      })}
    </>
  );
};
