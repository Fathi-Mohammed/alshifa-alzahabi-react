import { useTranslation } from 'react-i18next';

import Image from '@/assets/images/shapes/commentsFormShape.svg';
import styles from './styles.module.scss';

export const CommentsForm = () => {
  const { t } = useTranslation();
  return (
    <form>
      <div className={styles.formWrapper}>
        <figure className={styles.img}>
          <img src={Image} alt="" />
        </figure>

        <input className={`input ${styles.input}`} type="text" placeholder={t('yourComment')} />

        <button className={`link__ primary__ main_rounded__ ${styles.button}`}>
          {t('send')}
        </button>
      </div>
    </form>
  );
};
