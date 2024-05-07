import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthTitle } from '../../components/AuthTitle';
import { useTranslation } from 'react-i18next';
import { Image } from '@/shared/components';
import SignInImage from '@/assets/images/auth/login.png';
import { PasswordInput } from '../../components/PasswordInput';

import styles from './styles.module.scss';
import { tabTitle } from '@/shared/utils/tabTitle';

export const SignIn = () => {
  const { t } = useTranslation();
  tabTitle(t('login'));

  return (
    <div>
      <Container>
        <Row className="row_modify with_row_gap items_center__">
          <Col xs={12} lg={6}>
            <Image src={SignInImage} alt="login" center />
          </Col>
          <Col xs={12} lg={6}>
            <AuthTitle title={t('login')} subtitle={t('loginSubtitle')} />
            <form>
              <input
                className="input mb-2"
                type="text"
                placeholder={t('phoneNumber')}
              />
              <PasswordInput className="input mb-5" placeholder={t('password')} />
              <Link to="/auth/forget-password" className={styles.forgetLink}>
                {t('forgetPassword')}
              </Link>
              <button
                className={`link__ primary__ full_width main_rounded__ mb-4 ${styles.link}`}
              >
                {t('login')}
              </button>
              <Link
                to="/auth/sign-up"
                className={`link__ primary__ full_width main_rounded__ outline__ ${styles.link}`}
              >
                {t('signUp')}
              </Link>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
