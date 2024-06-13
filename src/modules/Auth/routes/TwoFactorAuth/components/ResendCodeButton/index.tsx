import React from 'react';
import { Trans } from 'react-i18next';
import styles from './styles.module.scss';
import { CircleCountdown } from './components';
import useApi from '@/shared/hooks/useApi';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';

export const ResendCodeButton: React.FC = () => {
  const maxCount = 30;
  const [timer, setTimer] = React.useState<number>(0);
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const location = useLocation();

  const {
    mutate: tryResend,
    data,
    isSuccess,
    isError,
    error,
  }: any = useApi.post(import.meta.env.VITE_RESEND_CODE, {
    mobile: location?.state?.mobile,
  });

  React.useEffect(() => {
    const timerIntrval = setInterval(() => {
      setTimer((timer) => timer + 1);
      if (buttonRef.current) {
        buttonRef.current.disabled = true;
      }
    }, 1000);

    if (timer === maxCount && buttonRef.current) {
      buttonRef.current.disabled = false;
      clearInterval(timerIntrval);
    }

    return () => clearInterval(timerIntrval);
  }, [timer]);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await tryResend();
    } catch (error) {
      throw error;
    }
  };

  React.useEffect(() => {
    if (isSuccess) {
      toast.success(data.message);
      setTimer(0);
    }

    if (isError) {
      toast.error(error.response.data.message);
    }
  }, [isSuccess, isError, data, error]);

  return (
    <>
      <div className={styles.resendCodeWrapper}>
        <Trans i18nKey="didNotReceiveCode" />
        <button
          ref={buttonRef}
          className={styles.resendCode}
          onClick={handleClick}
          type="button"
        >
          <Trans i18nKey="resendCode" />
        </button>
      </div>

      {timer < maxCount && (
        <div className={styles.countdownWrapper}>
          <CircleCountdown
            radius={30}
            stroke="#121212"
            max={maxCount}
            done={timer}
          />
          <span className={styles.countdownText}>{maxCount - timer}s</span>
        </div>
      )}
    </>
  );
};
