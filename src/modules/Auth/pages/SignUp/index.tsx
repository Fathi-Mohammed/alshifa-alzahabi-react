import { Col, Container, Row } from 'react-bootstrap';
import { AuthTitle } from '../../components/AuthTitle';
import { useTranslation } from 'react-i18next';
import { Image } from '@/shared/components';
import SignUpImage from '@/assets/images/auth/signup.png';
import { PasswordInput } from '../../components/PasswordInput';

import styles from './styles.module.scss';
import { tabTitle } from '@/shared/utils/tabTitle';

export const SignUp = () => {
  const { t } = useTranslation();
  tabTitle(t('signUp'));

  return (
    <div>
      <Container>
        <Row className="row_modify with_row_gap items_center__">
          <Col xs={12} lg={6}>
            <Image src={SignUpImage} alt="login" center />
          </Col>
          <Col xs={12} lg={6}>
            <AuthTitle
              title={t('signUpAuthTitle')}
              subtitle={t('signUpSubtitle')}
            />
            <form>
              <input
                className="input mb-2"
                type="text"
                placeholder={t('name')}
              />
              <input
                className="input mb-2"
                type="number"
                placeholder={t('phoneNumber')}
              />
              <input
                className="input mb-2"
                type="email"
                placeholder={t('mail')}
              />
              <PasswordInput className="input mb-2" placeholder={t('password')} />
              <PasswordInput
                className="input mb-5"
                placeholder={t('retypePassword')}
              />
              <button
                className={`link__ primary__ full_width main_rounded__ mb-4 ${styles.link}`}
              >
                {t('signUp')}
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
