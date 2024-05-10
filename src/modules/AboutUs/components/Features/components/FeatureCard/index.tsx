import styles from './styles.module.scss';
import Icon from '@/assets/images/shapes/features_icon_1.svg';

import type {Idata} from '../../../../index';

export const FeatureCard = ({ data: { title, desc } }: { data: Idata }) => {
  return (
    <div className={styles.featureCard}>
      <div className={styles.iconWrapper}>
        <img src={Icon} alt="" />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{desc}</p>
    </div>
  );
};
