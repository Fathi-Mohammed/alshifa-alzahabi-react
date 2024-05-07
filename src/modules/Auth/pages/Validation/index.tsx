import { Col, Container, Row } from 'react-bootstrap';
import { AuthTitle } from '../../components/AuthTitle';
import { useTranslation } from 'react-i18next';
import { Image } from '@/shared/components';
import ForgetPasswordImage from '@/assets/images/auth/forgetPassword.png';

import styles from './styles.module.scss';
import { tabTitle } from '@/shared/utils/tabTitle';
import { useState } from 'react';

export const Validation = () => {
  const [otp, setOtp] = useState<string[]>(new Array(5).fill(''));
  const { t } = useTranslation();

  tabTitle(t('Validation'));

  const handleChange = (e: any, index: number) => {
    if (isNaN(e.target.value)) return;
    setOtp([...otp.map((data, i) => (i === index ? e.target.value : data))]);

    if (e.target.value && e.target.nextElementSibling) {
      e.target.classList.add(styles.active);
      e.target.nextElementSibling.focus();
    }

    if (!e.target.nextElementSibling) {
      e.target.classList.add(styles.active);

      if (!(e.nativeEvent.inputType === 'deleteContentBackward')) {
        e.target.blur();
      } else {
        e.target.classList.remove(styles.active);
        e.target.previousElementSibling.focus();
      }
    }
  };

  const handleKeyPress = (e: any) => {
    if (e.key === 'Backspace' && e.target.value === '') {
      e.target.classList.remove(styles.active);
      e.target.previousElementSibling.focus();
      e.target.previousElementSibling.classList.remove(styles.active);
    }
  };

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
          <form>
            <div className={styles.codeInputsWrapper}>
              {otp.map((data, index) => (
                <input
                  key={index}
                  className={styles.codeInput}
                  type="number"
                  value={data}
                  maxLength={1}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleKeyPress(e)}
                />
              ))}
            </div>
            <div className={styles.resendCodeWrapper}>
              {t('didNotReceiveCode')}
              <button className={styles.resendCode}>{t('resendCode')}</button>
            </div>
            <button
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
