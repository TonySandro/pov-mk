import React from 'react';
import styles from './initialAdminSection.module.scss';
import { useTranslation } from 'react-i18next';

const InitialAdminSection: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className={styles.initialSectionSec}>
            <div className={styles.initialSectionContainer}>
                <div className={styles.textWrapper}>
                    <h1 className={styles.welcomeText}>{t('welcome')}</h1>
                    <p className={styles.roleText}>{t('manageCourses')}</p>
                </div>
            </div>
        </section>
    );
};

export default InitialAdminSection;
