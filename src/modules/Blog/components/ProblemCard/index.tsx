import { Image } from '@/shared/components';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

type props = {
  data: {
    id: number;
    title: string;
    description: string;
    image: string;
  };
};

export const ProblemCard = ({
  data: { id, image, title, description },
}: props) => {
  return (
    <Link className={styles.card} to={`/blog/${id}`}>
      <div className={styles.imgWrapper} aria-hidden="true"></div>
      <Image src={image || ''} asp={61.2299} alt="blog" />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.desc}>{description}</p>
    </Link>
  );
};
