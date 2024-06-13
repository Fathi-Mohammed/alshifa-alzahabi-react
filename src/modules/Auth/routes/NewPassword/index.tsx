import { Col, Container, Row } from 'react-bootstrap';
import { AuthTitle } from '../../components/AuthTitle';
import { useTranslation } from 'react-i18next';
import { Image } from '@/shared/components';
import forgetPasswordImage from '@/assets/images/auth/forgetPassword.png';
import { PasswordInput } from '../../components/PasswordInput';

import styles from './styles.module.scss';
import { tabTitle } from '@/shared/utils/tabTitle';
import useApi from '@/shared/hooks/useApi';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewPassword = () => {
  const [formData, setFormData] = useState({
    password: '',
    password_confirmation: '',
  });
  const { t } = useTranslation();
  tabTitle(t('setNewPassword'));

  const navegate = useNavigate();

  const { mutate, isSuccess, isError, error, data }: any = useApi.post(
    import.meta.env.VITE_RESET_PASSWORD,
    formData,
  );

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
      navegate('/', { replace: true });
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
            <Image src={forgetPasswordImage} alt="login" center />
          </Col>
          <Col xs={12} lg={6}>
            <AuthTitle
              title={t('setNewPasswordTitle')}
              subtitle={t('setNewPasswordSubtitle')}
            />
            <form onSubmit={handleSubmit}>
              <PasswordInput
                className="input mb-3"
                name="password"
                onChange={handleInputChange}
                placeholder={t('newPassword')}
              />
              <PasswordInput
                className="input mb-5"
                name="password_confirmation"
                onChange={handleInputChange}
                placeholder={t('reWritenewPassword')}
              />
              <button
                type="submit"
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

export default NewPassword;
