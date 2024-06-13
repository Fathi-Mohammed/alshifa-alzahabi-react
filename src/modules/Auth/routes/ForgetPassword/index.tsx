import { Col, Container, Row } from 'react-bootstrap';
import { AuthTitle } from '../../components/AuthTitle';
import { useTranslation } from 'react-i18next';
import { Image } from '@/shared/components';
import ForgetPasswordImage from '@/assets/images/auth/forgetPassword.png';

import styles from './styles.module.scss';
import { tabTitle } from '@/shared/utils/tabTitle';
import { useEffect, useState } from 'react';
import useApi from '@/shared/hooks/useApi';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
  const [mobile, setMobile] = useState('');
  const { t } = useTranslation();
  tabTitle(t('forgetPassword'));

  const navegate = useNavigate();

  const { data, mutate, isSuccess, isError, error }: any = useApi.post(
    import.meta.env.VITE_FORGET_PASSWORD,
    { mobile },
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await mutate();
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success(data.message);
      navegate('/auth/forget-pass-otp', { replace: true, state: { mobile } });
    }
    if (isError) {
      toast.error(error.response.data.message);
    }
  }, [isSuccess, isError, data, error]);

  return (
    <div>
      <Container>
        <Row className="row_modify with_row_gap items_center__">
          <Col xs={12} lg={6}>
            <Image src={ForgetPasswordImage} alt="login" center />
          </Col>
          <Col xs={12} lg={6}>
            <AuthTitle
              title={t('forgetPasswordTitle')}
              subtitle={t('forgetPasswordSubtitle')}
            />
            <form onSubmit={handleSubmit}>
              <input
                className="input mb-4"
                type="text"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
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

export default ForgetPassword;
