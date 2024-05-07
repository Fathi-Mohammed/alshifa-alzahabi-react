import { Link } from "react-router-dom";
import { FaArrowLeft } from 'react-icons/fa6';
import styles from './styles.module.scss';

type Props = {
  title : string;
  desc : string;
}

export const ServicesCard = ({title , desc} : Props) => {
  return (
    <Link to={"/service"} className={styles.servicesCard}>
    <h3 className={styles.cardTitle}>{title}</h3>
    <p className={styles.cardDesc}>{desc}</p>
    <div className={`link__ secondary__ main_rounded__ center_sm outline__ icon_dir ${styles.link}`}>
      حل مشكلتك الآن
      <FaArrowLeft />
    </div>
  </Link>
  )
}
