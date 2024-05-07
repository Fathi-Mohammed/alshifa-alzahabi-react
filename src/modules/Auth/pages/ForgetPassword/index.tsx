import { Col, Container, Row } from 'react-bootstrap';
import { AuthTitle } from '../../components/AuthTitle';
import { useTranslation } from 'react-i18next';
import { Image } from '@/shared/components';
import ForgetPasswordImage from '@/assets/images/auth/forgetPassword.png';

import styles from './styles.module.scss';
import { tabTitle } from '@/shared/utils/tabTitle';

export const ForgetPassword = () => {
  const { t } = useTranslation();
  tabTitle(t('forgetPassword'));

  return (
    <div>
      <Container>
        <Row className="row_modify with_row_gap items_center__">
          <Col xs={12} lg={6}>
            <Image src={ForgetPasswordImage} alt="login" center />
          </Col>
          <Col xs={12} lg={6}>
            <AuthTitle title={t('forgetPasswordTitle')} subtitle={t('forgetPasswordSubtitle')} />
            <form>
              <input
                className="input mb-4"
                type="text"
                placeholder={t('phoneNumber')}
              />
              <button
                className={`link__ primary__ full_width main_rounded__ mb-4 ${styles.link}`}
              >
                {t('sendCode')}
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
