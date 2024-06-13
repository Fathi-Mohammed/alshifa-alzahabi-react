import { Image } from '@/shared/components';
import styles from './styles.module.scss';

type Idata = {
  id?: number;
  image: string;
  title: string;
  content: string;
};

type Iprops = {
  data: Idata;
};
export const FeatureCard = ({ data: { image, title, content } }: Iprops) => {
  return (
    <div className={styles.featureCard}>
      <div className={styles.iconWrapper}>
        <Image src={image} alt="" />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{content}</p>
    </div>
  );
};
