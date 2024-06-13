import { Image, Loader } from '@/shared/components';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import styles from './styles.module.scss';
import { Comments } from './components/Comments';
import { tabTitle } from '@/shared/utils/tabTitle';
import useApi from '@/shared/hooks/useApi';

export const Topic = () => {
  const { id } = useParams();
  tabTitle('مشكلة عائلية');

  const { data, isLoading, refetch }: any = useApi.get(
    import.meta.env.VITE_TOPIC + id,
  );
  console.log(data);

  const { image, title, description, comments } = data?.data || {};

  if (isLoading) return <Loader visible={isLoading} />;

  return (
    <main className="default_page">
      <Container>
        <div className={styles.imgWrapper}>
          <Image src={image || ''} asp={32.5} />
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{description}</p>

        <Comments refetch={refetch} isLoading={isLoading} comments={comments} />
      </Container>
    </main>
  );
};
