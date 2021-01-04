import './SidebarSection.styles.scss';
import { TSidebarSection } from '../sidebarData';
import { FC } from 'react';

type TProps = {
  section: TSidebarSection;
};

export const SidebarSection: FC<TProps> = ({ section }) => {
  const { title, items } = section;
  return (
    <section className='sidebar-section-container'>
      <h2 className='sidebar-section-title'>{title}</h2>
      <ul className='sidebar-section-items'>
        {items.map((item) => {
          return (
            <ul className='sidebar-section-item' key={item}>
              {item}
            </ul>
          );
        })}
      </ul>
    </section>
  );
};
