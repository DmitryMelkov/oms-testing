import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { OMSUITypography } from '@oms/uikit';
import { Logo } from '../Logo/Logo';
import styles from './Sidebar.module.css';

export const Sidebar: React.FC = () => {
  const location = useLocation();

  return (
    <aside className={styles['sidebar']}>
      <div className={styles['sidebar__header']}>
        <Logo />
      </div>

      <nav className={styles['sidebar__nav']}>
        <div className={styles['sidebar__section']}>
          <OMSUITypography.Text as="h3" className={styles['sidebar__title']}>
            Бизнес-модули
          </OMSUITypography.Text>
          <ul className={styles['sidebar__list']}>
            <li className={styles['sidebar__item']}>
              <Link
                to="/applications"
                className={`${styles['sidebar__link']} ${
                  location.pathname.startsWith('/applications') || location.pathname === '/'
                    ? styles['sidebar__link_active']
                    : ''
                }`}
              >
                <span className={styles['sidebar__icon']}>📋</span>
                <OMSUITypography.Text className={styles['sidebar__text']}>Заявления</OMSUITypography.Text>
              </Link>
            </li>
            <li className={styles['sidebar__item']}>
              <Link
                to="/documents"
                className={`${styles['sidebar__link']} ${
                  location.pathname.startsWith('/documents') ? styles['sidebar__link_active'] : ''
                }`}
              >
                <span className={styles['sidebar__icon']}>📄</span>
                <OMSUITypography.Text className={styles['sidebar__text']}>Документы</OMSUITypography.Text>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
};
