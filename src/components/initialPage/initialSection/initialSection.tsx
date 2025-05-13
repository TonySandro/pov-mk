import React from 'react';
import styles from './initialSection.module.scss';
import { useTranslation } from 'react-i18next';

const InitialSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.initialSectionSec}>
      <div className={styles.initialSectionContainer}>
        <div className={styles.profileIcon}>TS</div>
        <div className={styles.textWrapper}>
          <h1 className={styles.welcomeText}>{t('common:welcomeBack')}</h1>
          <p className={styles.roleText}>{t('common:goodStudies')}</p>
        </div>
      </div>
    </section>
  );
};

export default InitialSection;
