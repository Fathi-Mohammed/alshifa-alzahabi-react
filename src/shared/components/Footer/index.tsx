import { Container } from 'react-bootstrap';
import styles from './styles.module.scss';
import FooterLogo from '@/assets/images/footerLogo.png';
import { useTranslation } from 'react-i18next';
import { NavLinks } from './components/NavLinks';
import { SocialList } from './components/SocialList';
import { Copyright } from './components/Copyright';
import { Contacts } from './components/Contacts';

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
      <Contacts />
      <footer className={styles.footer}>
        <Container>
          <div className={styles.footerContent}>
            <div>
              <div className={styles.logo}>
                <img src={FooterLogo} alt="logo" />
              </div>
              <p className={styles.desc}>
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
                هذا النص من مولد
              </p>
            </div>
            <div>
              <h2 className={styles.footerTitle}>{t('fastLinks')}</h2>
              <NavLinks />
            </div>
            <div>
              <h2 className={styles.footerTitle}>{t('footerSocials')}</h2>
              <SocialList />
            </div>
          </div>
          <Copyright />
        </Container>
      </footer>
    </>
  );
};
