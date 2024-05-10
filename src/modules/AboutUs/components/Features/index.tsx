import { Container } from 'react-bootstrap';
import styles from './styles.module.scss';
import { FeatureCard } from './components/FeatureCard';

import type { Idata } from '../../index';

export const Features = ({ data } : { data: Idata[] }) => {
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
