import { Modal } from 'antd';
import { Image } from '@/shared/components';
import Icon from '@/assets/images/shapes/paymentModal.svg';
import styles from './styles.module.scss';
import useApi from '@/shared/hooks/useApi';
import { useNavigate } from 'react-router-dom';

export const PaymentModal = ({ visible, onCancel, id }) => {
  const { mutateAsync } = useApi.post(import.meta.env.VITE_ORDERS, {
    service_id: id,
  });
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      const res = await mutateAsync();
      navigate('/payment/' + id, { state: res.data });
    } catch (error) {
      throw error;
    }
  };

  return (
    <Modal
      className={styles.modal}
      open={visible}
      onCancel={onCancel}
      footer={null}
    >
      <div className={styles.iconWrapper}>
        <Image src={Icon} alt="" />
      </div>
      <h3 className={styles.title}>يجب عليك تسديد مبلغ الخدمة</h3>

      <p className={styles.desc}>
        من فضلك قم بسداد مبلغ الخدمة لكى تستطيع حل مشكلتك
      </p>

      <button onClick={handleClick} className="link__ modalButton">
        دفع
      </button>
    </Modal>
  );
};
