import { Col, Container, Row } from 'react-bootstrap';
import { AuthTitle } from '../../components/AuthTitle';
import { useTranslation } from 'react-i18next';
import { Image } from '@/shared/components';
import forgetPasswordImage from '@/assets/images/auth/forgetPassword.png';
import { PasswordInput } from '../../components/PasswordInput';

import styles from './styles.module.scss';
import { tabTitle } from '@/shared/utils/tabTitle';

export const SetNewPassword = () => {
  const { t } = useTranslation();
  tabTitle(t('setNewPassword'));

  return (
    <div>
      <Container>
        <Row className="row_modify with_row_gap items_center__">
          <Col xs={12} lg={6}>
            <Image src={forgetPasswordImage} alt="login" center />
          </Col>
          <Col xs={12} lg={6}>
            <AuthTitle title={t('setNewPasswordTitle')} subtitle={t('setNewPasswordSubtitle')} />
            <form>
              <PasswordInput className="input mb-3" placeholder={t('newPassword')} />
              <PasswordInput className="input mb-5" placeholder={t('reWritenewPassword')} />
              <button
                className={`link__ primary__ full_width main_rounded__ mb-4 ${styles.link}`}
              >
                {t('save')}
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
