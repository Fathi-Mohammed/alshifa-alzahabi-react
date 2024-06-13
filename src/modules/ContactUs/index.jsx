import { useTranslation } from 'react-i18next';
import { Container } from 'react-bootstrap';
import { tabTitle } from '@/shared/utils/tabTitle';
import styles from './styles.module.scss';
import { useEffect, useState } from 'react';
import useApi from '@/shared/hooks/useApi';
import { toast } from 'react-toastify'; // Importing toast for notifications

export const ContactUs = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    mobile: '',
    email: '',
    message: '',
  });

  const { t } = useTranslation();

  const { mutate, isSuccess, isError, error, data } = useApi.post(
    import.meta.env.VITE_CONTACT_US,
    formData,
  );

  tabTitle(t('ContactUs'));

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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

      setFormData({
        firstName: '',
        lastName: '',
        mobile: '',
        email: '',
        message: '',
      });
    }

    if (isError) {
      toast.error(error.response.data.message);
    }
  }, [isSuccess, isError, data, error]);

  return (
    <main className={`${styles.contactUsSection} default_page `}>
      <Container>
        <div className="page_head_wrapper">
          <h2 className="page_main_title__">{t('contactUsSectionTitle')}</h2>
          <p className="page_sub_title__">{t('contactUsSectionSubTitle')}</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className={styles.inputWrapper}>
            <input
              name="first_name"
              onChange={handleInputChange}
              value={formData.firstName}
              className="input"
              type="text"
              placeholder={t('firstName')}
            />
            <input
              name="last_name"
              onChange={handleInputChange}
              value={formData.lastName}
              className="input"
              type="text"
              placeholder={t('lastName')}
            />
            <input
              className="input"
              type="number"
              name="mobile"
              onChange={handleInputChange}
              value={formData.mobile}
              placeholder={t('phoneNumber')}
            />
            <input
              name="email"
              onChange={handleInputChange}
              value={formData.email}
              className="input"
              type="email"
              placeholder={t('email')}
            />
            <textarea
              name="message"
              onChange={handleInputChange}
              value={formData.message}
              className="input textarea"
              placeholder={t('message')}
            />
            <button className="link__ primary__ main_rounded__ half_width center">
              {t('send')}
            </button>
          </div>
        </form>
      </Container>
    </main>
  );
};
