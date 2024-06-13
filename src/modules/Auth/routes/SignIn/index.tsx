import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthTitle } from '../../components/AuthTitle';
import { Trans, useTranslation } from 'react-i18next';
import { Image } from '@/shared/components';
import SignInImage from '@/assets/images/auth/login.png';
import { PasswordInput } from '../../components/PasswordInput';

import styles from './styles.module.scss';
import { tabTitle } from '@/shared/utils/tabTitle';
import useApi from '@/shared/hooks/useApi';
import { toast } from 'react-toastify';
import { useAuth } from '@/shared/context/AuthProvider';
import { Spin } from 'antd';

const SignIn: React.FC = () => {
  const [formData, setFormData] = React.useState({
    mobile: '',
    password: '',
    device_token: ' ',
    device_type: 'web',
  });

  const { t } = useTranslation();
  tabTitle(t('login'));
  const navigate = useNavigate();

  const { login } = useAuth();

  const { mutateAsync, isPending, isError, error }: any = useApi.post(
    import.meta.env.VITE_LOGIN,
    formData,
  );
  const errorsList = error?.response?.data?.data || null;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await mutateAsync();
      toast.success(res.message);
      login(res.data);
      navigate('/', { replace: true });
    } catch (error: any) {
      const res = error.response.data;
      if (res.data === null) {
        toast.error(res.message);
        toast.info(res.data);
        navigate('/auth/otp', {
          replace: true,
          state: { mobile: formData.mobile },
        });
      } else {
        toast.error(res.message);
      }
    }
  };
  return (
    <div>
      <Container>
        <Row className="row_modify with_row_gap items_center__">
          <Col xs={12} lg={6}>
            <Image src={SignInImage} alt="login" center />
          </Col>
          <Col xs={12} lg={6}>
            <AuthTitle title={t('login')} subtitle={t('loginSubtitle')} />
            <form onSubmit={handleSubmit}>
              {isError && errorsList && (
                <h3 className="formError">{errorsList?.mobile}</h3>
              )}
              <input
                className="input mb-2"
                type="text"
                name="mobile"
                onChange={handleInputChange}
                placeholder={t('phoneNumber')}
                required
              />
              {isError && errorsList && (
                <h3 className="formError">{errorsList?.password}</h3>
              )}
              <PasswordInput
                className="input mb-5"
                name="password"
                onChange={handleInputChange}
                placeholder={t('password')}
              />
              <Link to="/auth/forget-password" className={styles.forgetLink}>
                {t('forgetPassword')}
              </Link>
              <button
                className={`link__ primary__ full_width main_rounded__ mb-4 ${styles.link}`}
              >
                {isPending ? <Spin /> : <Trans i18nKey="login" />}
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

export default SignIn;
