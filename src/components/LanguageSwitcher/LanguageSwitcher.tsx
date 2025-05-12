import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './languageSwitcher.module.scss';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={styles.languageSwitcher}>
      <button
        className={`${styles.langBtn} ${currentLanguage === 'pt' ? styles.active : ''}`}
        onClick={() => changeLanguage('pt')}
      >
        PT
      </button>
      <button
        className={`${styles.langBtn} ${currentLanguage === 'en' ? styles.active : ''}`}
        onClick={() => changeLanguage('en')}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
