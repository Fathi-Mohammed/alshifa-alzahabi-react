import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import { AiOutlineGlobal } from 'react-icons/ai';
import { useLanguage } from '@/shared/hooks/useLanguage';

type props = {
  onClick: () => void;
};

export const ToolBar = ({ onClick} : props) => {
  const { t, i18n } = useTranslation();
  const { changeLanguage } = useLanguage();


  const handleLangButtonClick = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en');
    changeLanguage(i18n.language === 'en' ? 'ar' : 'en');
    onClick();
  };
  return (
    <ul className={styles.toolBar}>
      <li className={styles.listItem}>
        <div className={styles.headerLinksWrapper}>
          <Link
            onClick={onClick}
            to="/auth/sign-in"
            className={`${styles.headerLinks} ${styles.login}`}
          >
            {t('login')}
          </Link>
          <Link
            onClick={onClick}
            to="/auth/sign-up"
            className={`${styles.headerLinks} ${styles.signUp}`}
          >
            {t('signUp')}
          </Link>
        </div>
      </li>
      <li>
        {/* change lang button */}
        <button className={styles.langBtn} onClick={handleLangButtonClick}>
          <AiOutlineGlobal />
        </button>
      </li>
    </ul>
  );
};
