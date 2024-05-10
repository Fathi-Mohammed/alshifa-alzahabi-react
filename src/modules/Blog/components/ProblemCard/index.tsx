import { Image } from '@/shared/components';
import CardImage from '@/assets/images/blog/01.png';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

type props = {
  data: {
    id: number;
    title: string;
    desc: string;
  };
};

export const ProblemCard = ({ data:{ id, title, desc} }: props) => {
  return (
    <Link className={styles.card} to={`/blog/${id}`}>
      <div className={styles.imgWrapper} aria-hidden="true"></div>
      <Image src={CardImage} asp={61.2299} alt="blog" />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.desc}>{desc}</p>
    </Link>
  );
};
