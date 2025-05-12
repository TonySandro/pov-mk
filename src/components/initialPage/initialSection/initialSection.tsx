import React from 'react';
import styles from './initialSection.module.scss';

interface InitialSectionProps {
  isAuthenticated: boolean;
  bannerImage: string;
}

const InitialSection: React.FC<InitialSectionProps> = ({ isAuthenticated, bannerImage }) => {
  if (!isAuthenticated) {
    return (
      <section className={styles.bannerSection}>
        <div className={styles.bannerContainer}>
          <img
            className={styles.bannerImage}
            src={bannerImage}
            alt="Banner de acesso"
          />
        </div>
      </section>
    );
  }

  return (
    <section className={styles.initialSectionSec}>
      <div className={styles.initialSectionContainer}>
        <div className={styles.profileIcon}>TS</div>
        <div className={styles.textWrapper}>
          <h1 className={styles.welcomeText}>Bem-vindo(a) de volta, Tony</h1>
          <p className={styles.roleText}>Bons estudos!</p>
        </div>
      </div>
    </section>
  );
};

export default InitialSection;
