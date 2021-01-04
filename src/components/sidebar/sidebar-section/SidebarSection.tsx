import './SidebarSection.styles.scss';
import { TSidebarSection } from '../sidebarData';
import { FC } from 'react';

type TProps = {
  section: TSidebarSection;
};

export const SidebarSection: FC<TProps> = ({ section }) => {
  const { title, items } = section;
  return (
    <>
      <h2>{title}</h2>
      <ul className='sidebar-section'>
        {items.map((item) => {
          return <ul key={item}>{item}</ul>;
        })}
      </ul>
    </>
  );
};
