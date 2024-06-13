import React, { useState, useEffect } from 'react';
import { Steps } from 'antd';
import { Container } from 'react-bootstrap';
import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import useApi from '@/shared/hooks/useApi';
import { toast } from 'react-toastify';

export const MultiStepForm: React.FC = () => {
  const { serviceId } = useParams();
  const { data, isLoading }: any = useApi.get(`/services/${serviceId}`);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<any>([]);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { mutateAsync } = useApi.post(
    '/orders/' + data?.data?.unanswered_order?.id + '/answers',
    {
      answers,
      is_share: 0,
    },
  );

  useEffect(() => {
    if (data) {
      const initialAnswers =
        data?.data?.questions?.map((step) => ({
          question_id: step.id,
          answer: '',
        })) || [];
      setAnswers(initialAnswers);
    }
  }, [data]);

  const handleNextButton = () => {
    if (answers[current]?.answer?.trim() !== '') {
      setCurrent(current + 1);
    } else {
      toast.error('Please provide an answer before proceeding.');
    }
  };

  const handlePrevButton = () => setCurrent(current - 1);

  const handleInputChange = (e) => {
    const newAnswers = [...answers];
    newAnswers[current].answer = e.target.value;
    setAnswers(newAnswers);
  };

  const handleSubmit = async () => {
    try {
      const res = await mutateAsync();
      toast.success(res.message);
      navigate('/', { replace: true });
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  const handleShareOrder = () => {
    navigate(
      '/multi-step/' + serviceId + '/share/' + data?.data?.unanswered_order?.id,
      {
        replace: true,
        state: { answers },
      },
    );
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const steps = data?.data?.questions;
  if (!steps || steps.length === 0) {
    return <div>No steps available</div>;
  }

  const items = steps.map((item) => ({ key: item.title }));

  return (
    <main className="default_page">
      <Container>
        <Steps className={styles.steps} current={current} items={items} />
        <div className={styles.content}>
          <h2 className={styles.title}>{steps[current].title}</h2>
          <textarea
            className={`${styles.input} input`}
            placeholder="Enter your answer"
            value={answers[current]?.answer || ''}
            onChange={handleInputChange}
          />
        </div>

        <div className={styles.buttonsWrapper}>
          {current < steps.length - 1 && (
            <button
              onClick={handleNextButton}
              className={`${styles.button} ${styles.nextBtn} `}
            >
              {t('next')}
            </button>
          )}
          {current === steps.length - 1 && (
            <button
              onClick={handleSubmit}
              className={` ${styles.button} ${styles.doneBtn}`}
            >
              {t('done')}
            </button>
          )}
          {current === steps.length - 1 && (
            <button
              onClick={handleShareOrder}
              className={`${styles.button} ${styles.shareBtn}`}
            >
              {t('shareWithPeople')}
            </button>
          )}
          {current > 0 && (
            <button
              className={`${styles.button} ${styles.prevBtn}`}
              onClick={handlePrevButton}
            >
              {t('prev')}
            </button>
          )}
        </div>
      </Container>
    </main>
  );
};
