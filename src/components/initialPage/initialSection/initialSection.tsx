import React from 'react';
import styles from './initialSection.module.scss';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../../hooks/useAppSelector';

const InitialSection: React.FC = () => {
  const { t } = useTranslation();
  const user = useAppSelector((state) => state.user.user);

  return (
    <section className={styles.initialSectionSec}>
      <div className={styles.initialSectionContainer}>
        <div className={styles.textWrapper}>
          <h1 className={styles.welcomeText}>
            {t('common:welcomeBack')} {user?.name}
          </h1>
          <p className={styles.roleText}>{t('common:goodStudies')}</p>
        </div>
      </div>
    </section>
  );
};

export default InitialSection;
