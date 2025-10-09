import React from 'react';
import { Sidebar } from '../Sidebar/Sidebar';
import styles from './Layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <main className={styles.layoutMain}>
        {children}
      </main>
    </div>
  );
};