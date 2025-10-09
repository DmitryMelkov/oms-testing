import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Sidebar.module.css';

export const Sidebar: React.FC = () => {
  const location = useLocation();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <h2>АИС ОМС</h2>
      </div>

      <nav className={styles.sidebarNav}>
        <div  className={styles.navSection}>
          <h3 >Бизнес-модули</h3>
          <ul>
            <li>
              <Link
                to="/applications"
                className={`${styles.navLink} ${location.pathname.startsWith('/applications') || location.pathname === '/' ? styles.active : ''}`}
              >
                <span className={styles.navIcon}>📋</span>
                Заявления
              </Link>
            </li>
            <li>
              <Link
                to="/documents"
                className={`${styles.navLink} ${location.pathname.startsWith('/documents') ? styles.active : ''}`}
              >
                <span className={styles.navIcon}>📄</span>
                Документы
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
};