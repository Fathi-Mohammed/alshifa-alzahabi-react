import React, { useState } from 'react';
import { message, Steps } from 'antd';
import { Container } from 'react-bootstrap';

import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';

const steps = [
  {
    title: 'Question 1',
    content: 'What is your name?',
  },
  {
    title: 'Question 2',
    content: 'How old are you?',
  },
  {
    title: 'Question 3',
    content: 'Where are you from?',
  },
  {
    title: 'Question 1',
    content: 'What is your name?',
  },
  {
    title: 'Question 2',
    content: 'How old are you?',
  },
  {
    title: 'Question 3',
    content: 'Where are you from?',
  },
  {
    title: 'Question 1',
    content: 'What is your name?',
  },
  {
    title: 'Question 2',
    content: 'How old are you?',
  },
  {
    title: 'Question 3',
    content: 'Where are you from?',
  },
  {
    title: 'Question 3',
    content: 'Where are you from?',
  },
];

export const MultiStepForm: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<string[]>(
    new Array(steps.length).fill(''),
  );

  const { t } = useTranslation();

  const handleNextButton = () => {
    if (answers[current].trim() !== '') {
      setCurrent(current + 1);
    } else {
      message.error('Please provide an answer before proceeding.');
    }
  };
  const handlePrevButton = () => setCurrent(current - 1);

  const handleInputChange = (e) => {
    const newAnswers = [...answers];
    newAnswers[current] = e.target.value;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    console.log(answers);
    message.success('Submitted successfully');
  };

  const items = steps.map((item) => ({ key: item.title }));

  return (
    <main className="default_page">
      <Container>
        <Steps className={styles.steps} current={current} items={items} />
        <div className={styles.content}>
          <h2 className={styles.title}>{steps[current].content}</h2>
          <textarea
            className={`${styles.input} input`}
            placeholder="Enter your answer"
            value={answers[current]}
            onChange={handleInputChange}
          />
        </div>

        <div className={styles.buttonsWrapper}>
          {current < steps.length - 1 && (
            <button onClick={handleNextButton} className={`${styles.button} ${styles.nextBtn} `}>
              {t('next')}
            </button>
          )}
          {current === steps.length - 1 && (
            <button onClick={handleSubmit} className={` ${styles.button} ${styles.doneBtn}`}>
              {t('done')}
            </button>
          )}
          {current === steps.length - 1 && (
            <button onClick={handleSubmit} className={`${styles.button} ${styles.shareBtn}`}>
              {t('shareWithPeople')}
            </button>
          )}
          {current > 0 && <button className={`${styles.button} ${styles.prevBtn}`} onClick={handlePrevButton}>{t('prev')}</button>}
        </div>
      </Container>
    </main>
  );
};
