import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa6';
import styles from './styles.module.scss';
import { PaymentModal } from '../PaymentModal';
import { useState } from 'react';

type Props = {
  data: {
    title: string;
    content: string;
    id: number;
    has_unanswered_order: boolean;
  };
};

export const ServicesCard = ({
  data: { title, content, id, has_unanswered_order },
}: Props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if (!has_unanswered_order) {
      navigate('/multi-step');
      setModalVisible(true);
    }
  };

  return (
    <>
      <Link
        to={has_unanswered_order ? '/multi-step/' + id : '#'}
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
      <PaymentModal
        id={id}
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
      />
    </>
  );
};
