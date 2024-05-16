import styles from './styles.module.scss';
import { RiCopyrightLine } from 'react-icons/ri';
import AlmasderLogo from '@/assets/images/shapes/copyrights.svg';

export const Copyright = () => {
  return (
    <div className={styles.copyright}>
      <RiCopyrightLine />
      جميع حقوق النشر محفوظة
      <img src={AlmasderLogo} alt="" />
    </div>
  );
};
