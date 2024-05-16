import styles from './styles.module.scss';

type Idata = {
  id? : number;
  icon: string;
  title: string;
  content: string;
};

type Iprops = {
  data: Idata
}
export const FeatureCard = ({ data: { icon, title, content } } : Iprops ) => {
  return (
    <div className={styles.featureCard}>
      <div className={styles.iconWrapper}>
        <img src={icon} alt="" />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{content}</p>
    </div>
  );
};
