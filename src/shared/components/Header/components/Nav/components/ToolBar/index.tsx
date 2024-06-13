import { Trans, useTranslation } from 'react-i18next';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import { AiOutlineGlobal } from 'react-icons/ai';
import { CiLogout } from 'react-icons/ci';
import { useLanguage } from '@/shared/hooks/useLanguage';
import { useAuth } from '@/shared/context/AuthProvider';

type props = {
  onClick: () => void;
};

export const ToolBar = ({ onClick }: props) => {
  const { t, i18n } = useTranslation();
  const { changeLanguage } = useLanguage();

  const { user, logout } = useAuth();

  const handleLangButtonClick = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en');
    changeLanguage(i18n.language === 'en' ? 'ar' : 'en');
    onClick();
  };
  return (
    <ul className={styles.toolBar}>
      {!user && (
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
      )}
      {user && (
        <>
          <li className={styles.userInfo}>
            <Trans i18nKey="welcome" values={{ name: user.name }}></Trans>
          </li>
          <li>
            <button className={styles.langBtn} onClick={logout}>
              <CiLogout />
            </button>
          </li>
        </>
      )}
      <li>
        <button className={styles.langBtn} onClick={handleLangButtonClick}>
          <AiOutlineGlobal />
        </button>
      </li>
    </ul>
  );
};
