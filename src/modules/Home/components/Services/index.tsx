import { Col, Container, Row } from 'react-bootstrap';
import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';
import { ServicesCard } from './components/ServicesCard';
import { PaymentModal } from './components/PaymentModal';
import { useState } from 'react';

type data = {
  id: number;
  title: string;
  content: string;
};

type Iprops = {
  data: data[]
}

export const Services = ({ data } : Iprops) => {
  const { t } = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);
  const isPayed = false;

  return (
    <section className={`${styles.services} default_section`}>
      <Container>
        <div className="section_head_wrapper">
          <h2 className="section_main_title__">{t('servicesSectionTitle')}</h2>
        </div>
        <Row className="row_modify with_row_gap">
          {data.map((item , index) => (
            <Col key={index} lg={6}>
              <ServicesCard data={item} isPayed={isPayed} setModalVisible={setModalVisible} />
            </Col>
          ))}
        </Row>
      </Container>
      <PaymentModal
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
      />
    </section>
  );
};
