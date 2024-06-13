import { Col, Container, Row } from 'react-bootstrap';
import { AuthTitle } from '../../components/AuthTitle';
import { useTranslation } from 'react-i18next';
import { Image } from '@/shared/components';
import SignUpImage from '@/assets/images/auth/signup.png';
import { PasswordInput } from '../../components/PasswordInput';

import styles from './styles.module.scss';
import { tabTitle } from '@/shared/utils/tabTitle';
import React, { useEffect, useState } from 'react';
import useApi from '@/shared/hooks/useApi';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    password: '',
    password_confirmation: '',
    device_token: ' ',
    device_type: 'web',
  });
  const { t } = useTranslation();
  tabTitle(t('signUp'));

  const navigate = useNavigate();

  const { mutate, isLoading, isSuccess, isError, error, data }: any =
    useApi.post(import.meta.env.VITE_REGISTER, formData);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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

      navigate('/auth/otp', {
        replace: true,
        state: { mobile: formData.mobile },
      });
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
            <Image src={SignUpImage} alt="login" center />
          </Col>
          <Col xs={12} lg={6}>
            <AuthTitle
              title={t('signUpAuthTitle')}
              subtitle={t('signUpSubtitle')}
            />
            <form onSubmit={handleSubmit}>
              <input
                className="input mb-2"
                type="text"
                name="name"
                onChange={handleInputChange}
                placeholder={t('name')}
              />
              <input
                className="input mb-2"
                type="number"
                name="mobile"
                onChange={handleInputChange}
                placeholder={t('phoneNumber')}
              />
              <input
                className="input mb-2"
                type="email"
                name="email"
                onChange={handleInputChange}
                placeholder={t('mail')}
              />
              <PasswordInput
                className="input mb-2"
                name="password"
                onChange={handleInputChange}
                placeholder={t('password')}
              />
              <PasswordInput
                className="input mb-5"
                name="password_confirmation"
                onChange={handleInputChange}
                placeholder={t('retypePassword')}
              />
              <button
                disabled={isLoading}
                type="submit"
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

export default SignUp;
