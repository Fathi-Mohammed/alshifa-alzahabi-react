import styles from './styles.module.scss';

type props = {
  title: string;
  subtitle?: string;
};
export const AuthTitle = ({ title, subtitle }: props) => {
  return <div className={styles.authTitleWrapper}>
    <h1 className={styles.title}>{title}</h1>
    {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
  </div>;
};
