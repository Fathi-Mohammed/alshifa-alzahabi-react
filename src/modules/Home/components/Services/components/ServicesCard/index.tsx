import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa6';
import styles from './styles.module.scss';

type Props = {
  data: {
    title: string;
    content: string;
  };
  isPayed: boolean;
  setModalVisible: (value: boolean) => void;
};

export const ServicesCard = ({ data: { title, content } , isPayed , setModalVisible}: Props) => {

  const handleClick = () => {
    if (!isPayed) {
      setModalVisible(true);
    }
  };

  return (
      <Link
        to={isPayed ? '/payment' : '#'}
        onClick={handleClick}
        className={styles.servicesCard}
      >
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDesc}>{content}</p>
        <div
          className={`link__ secondary__ main_rounded__ center_sm outline__ icon_dir ${styles.link}`}
        >
          حل مشكلتك الآن
          <FaArrowLeft />
        </div>
      </Link>
  );
};
