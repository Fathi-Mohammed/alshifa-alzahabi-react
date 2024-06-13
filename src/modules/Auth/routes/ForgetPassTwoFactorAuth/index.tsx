import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AuthTitle } from '../../components/AuthTitle';
import { useTranslation } from 'react-i18next';
import { Image } from '@/shared/components';
import ForgetPasswordImage from '@/assets/images/auth/forgetPassword.png';

import styles from './styles.module.scss';
import { tabTitle } from '@/shared/utils/tabTitle';
import { Input } from 'antd';
import useApi from '@/shared/hooks/useApi';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '@/shared/context/AuthProvider';
import { ResendCodeButton } from './components';

const ForgetPassTwoFactorAuth: React.FC = () => {
  const { t } = useTranslation();
  tabTitle(t('Validation'));

  const { login } = useAuth();

  const navigate = useNavigate();

  const location = useLocation();
  const { mobile } = location?.state || {};
  const [formData, setFormData] = useState({
    mobile: mobile,
    code: '',
  });

  const {
    mutate: tryVerify,
    isSuccess: isVerifySuccess,
    isError: isVerifyError,
    isLoading: isVerifyLoading,
    error: VirifyError,
    data: VirifyData,
  }: any = useApi.post(import.meta.env.VITE_VERIFY_CODE, formData);

  const handleInputChange = (code) => {
    setFormData({ ...formData, code });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await tryVerify();
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    if (isVerifySuccess) {
      toast.success(VirifyData.message);
      login(VirifyData.data);
      navigate('/auth/new-password', { replace: true });
    }

    if (isVerifyError) {
      toast.error(VirifyError.response.data.message);
    }
  }, [isVerifySuccess, isVerifyError, VirifyError, VirifyData]);

  return (
    <Container>
      <Row className="row_modify with_row_gap items_center__">
        <Col xs={12} lg={6}>
          <Image src={ForgetPasswordImage} alt="login" center />
        </Col>
        <Col xs={12} lg={6}>
          <AuthTitle
            title={t('ValidationTitle')}
            subtitle={t('ValidationSubtitle')}
          />
          <form onSubmit={handleSubmit}>
            <Input.OTP onChange={handleInputChange} length={4} />

            <ResendCodeButton />
            <button
              type="submit"
              disabled={isVerifyLoading}
              className={`link__ primary__ full_width main_rounded__ mb-4 ${styles.link}`}
            >
              {t('verify')}
            </button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default ForgetPassTwoFactorAuth;
