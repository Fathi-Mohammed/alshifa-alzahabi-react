import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { FiPhoneCall } from 'react-icons/fi';
import { TbBrandWhatsapp } from 'react-icons/tb';
import { MdOutlineEmail } from 'react-icons/md';

import styles from './styles.module.scss';
import { Container } from 'react-bootstrap';

export const Contacts = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Container>
        <div className={styles.linksWrapper}>
          <Link className={styles.link} to="#">
            <div className={styles.iconWrapper}>
              <FiPhoneCall />
            </div>
            <div className={styles.linkContent}>
              <span className={styles.title}>{t('callUsViaPhone')}</span>
              <span className={styles.desc}>+966 0789 06541</span>
            </div>
          </Link>
          <Link className={styles.link} to="#">
            <div className={styles.iconWrapper}>
              <TbBrandWhatsapp />
            </div>
            <div className={styles.linkContent}>
              <span className={styles.title}>{t('callUsViaWhatsapp')}</span>
              <span className={styles.desc}>+966 0789 06541</span>
            </div>
          </Link>
          <Link className={styles.link} to="#">
            <div className={styles.iconWrapper}>
              <MdOutlineEmail />
            </div>
            <div className={styles.linkContent}>
              <span className={styles.title}>{t('callUsViaEmail')}</span>
              <span className={styles.desc}>+966 0789 06541</span>
            </div>
          </Link>
        </div>
      </Container>
    </div>
  );
};
