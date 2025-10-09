import React from 'react';
import { OMSUITypography } from '@oms/uikit';
import { IcMgfomsRound24Icon } from '@oms/uikit/icons';
import styles from './Logo.module.css';

export const Logo: React.FC = () => {
  return (
    <div className={styles['logo']}>
      <IcMgfomsRound24Icon size={24} className={styles['logo__icon']} />
      <OMSUITypography.Heading1 className={styles['logo__text']}>
        АИС <span className={styles['logo__accent']}>ОМС</span>
      </OMSUITypography.Heading1>
    </div>
  );
};
