import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

export const NavLinks = () => {
  const { t } = useTranslation();
  return (
    <ul className={styles.navLinks}>
      <li>
        <Link to="/">{t('Home')}</Link>
      </li>
      <li>
        <Link to="/">{t('AboutUs')}</Link>
      </li>
      <li>
        <Link to="/problems">{t('problems')}</Link>
      </li>
      <li>
        <Link to="/blog">{t('blog')}</Link>
      </li>
      <li>
        <Link to="/contact-us">{t('ContactUs')}</Link>
      </li>
      {/* <li>
        <Link to="/goals">
          {t('goals')}
        </Link>
      </li> */}
    </ul>
  );
};
