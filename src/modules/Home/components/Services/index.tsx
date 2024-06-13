import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'react-bootstrap';
import { ServicesCard } from './components/ServicesCard';
import type { services } from '@/shared/model/Home';
import styles from './styles.module.scss';

type props = {
  data: services[];
};

export const Services = ({ data }: props) => {
  const { t } = useTranslation();

  return (
    <section className={`${styles.services} default_section`}>
      <Container>
        <div className="section_head_wrapper">
          <h2 className="section_main_title__">{t('servicesSectionTitle')}</h2>
        </div>
        <Row className="row_modify with_row_gap">
          {data?.map((item: services) => (
            <Col key={item.id} lg={6}>
              <ServicesCard data={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
