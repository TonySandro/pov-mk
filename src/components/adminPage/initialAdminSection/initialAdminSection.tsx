import React from 'react';
import styles from './initialAdminSection.module.scss';

const InitialAdminSection: React.FC = () => {
    return (
        <section className={styles.initialSectionSec}>
            <div className={styles.initialSectionContainer}>
                <div className={styles.textWrapper}>
                    <h1 className={styles.welcomeText}>Área de admin</h1>
                    <p className={styles.roleText}>Gerencie os cursos</p>
                </div>
            </div>
        </section>
    );
};

export default InitialAdminSection;
