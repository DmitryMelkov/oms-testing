import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { OMSUITypography } from '@oms/uikit';
import { IcGroup24Icon, IcHome124Icon, IcProfile48Icon } from '@oms/uikit/icons';
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
          <ul className={styles['sidebar__list']}>
            <li className={styles['sidebar__item']}>
              <Link
                to="/applications"
                className={`${styles['sidebar__link']} ${
                  location.pathname.startsWith('/applications') || location.pathname === '/'
                    ? styles['sidebar__link--active']
                    : ''
                }`}
              >
                <div className={styles['sidebar__icon-wrapper']}>
                  <IcHome124Icon size={24} className={styles['sidebar__icon']} />
                </div>
                <OMSUITypography.Text className={styles['sidebar__text']}>Заявления</OMSUITypography.Text>
              </Link>
            </li>
            <li className={styles['sidebar__item']}>
              <Link
                to="/documents"
                className={`${styles['sidebar__link']} ${
                  location.pathname.startsWith('/documents') ? styles['sidebar__link--active'] : ''
                }`}
              >
                <div className={styles['sidebar__icon-wrapper']}>
                  <IcGroup24Icon size={24} className={styles['sidebar__icon']} />
                </div>
                <OMSUITypography.Text className={styles['sidebar__text']}>Документы</OMSUITypography.Text>
              </Link>
            </li>
          </ul>
          <div className={styles['sidebar__bottom']}>
            <IcProfile48Icon size={24} className={styles['sidebar__icon--user']} />
            <div>
              <OMSUITypography.Text className={styles['sidebar__user-name']}>Голиков Е. В.</OMSUITypography.Text>
              <OMSUITypography.Text className={styles['sidebar__user-role']}>Администратор ЕТД</OMSUITypography.Text>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
};
