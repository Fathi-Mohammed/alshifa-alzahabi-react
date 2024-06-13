import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Image from '@/assets/images/shapes/commentsFormShape.svg';
import styles from './styles.module.scss';
import useApi from '@/shared/hooks/useApi';
import { useParams } from 'react-router-dom';

type props = {
  refetch: any;
};

export const CommentsForm: React.FC<props> = ({ refetch }) => {
  const [comment, setComment] = useState('');
  const { id } = useParams();
  const { t } = useTranslation();
  const { mutateAsync } = useApi.post(`forum/${id}/comments`, {
    comment,
  });
  const handlePostComment = async (e) => {
    e.preventDefault();
    try {
      await mutateAsync();
      refetch();
      setComment('');
    } catch (error) {
      throw error;
    }
  };
  return (
    <form onSubmit={handlePostComment}>
      <div className={styles.formWrapper}>
        <figure className={styles.img}>
          <img src={Image} alt="" />
        </figure>

        <input
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className={`input ${styles.input}`}
          type="text"
          placeholder={t('yourComment')}
        />

        <button className={`link__ primary__ main_rounded__ ${styles.button}`}>
          {t('send')}
        </button>
      </div>
    </form>
  );
};
