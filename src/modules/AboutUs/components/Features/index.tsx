import { Container } from 'react-bootstrap';
import styles from './styles.module.scss';
import { FeatureCard } from './components/FeatureCard';

type Idata = {
  id: number;
  image: string;
  title: string;
  content: string;
};

type Iprops = {
  data: Idata[];
};
export const Features = ({ data }: Iprops) => {
  return (
    <section className={`default_section ${styles.featuresSection}`}>
      <Container>
        <div className={styles.featuresWrapper}>
          {data.map((item, index) => (
            <FeatureCard key={index} data={item} />
          ))}
        </div>
      </Container>
    </section>
  );
};
