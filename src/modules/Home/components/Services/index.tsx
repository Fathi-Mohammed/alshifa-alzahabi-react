import { Col, Container, Row } from 'react-bootstrap';
import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';
import { ServicesCard } from './components/ServicesCard';

export const Services = () => {
  const { t } = useTranslation();

  return (
    <section className={`${styles.services} default_section`}>
      <Container>
        <div className="section_head_wrapper">
          <h2 className="section_main_title__">{t('servicesSectionTitle')}</h2>
        </div>
        <Row className="row_modify with_row_gap">
          <Col lg={6}>
            <ServicesCard
              title="حل مشكـــــــــلات"
              desc="لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل
                    ليتصور طريقه وضع وضع النصوص النهائية المطلوبة للتصميم ويقول
                    البعض ان وضع النصوص التجريبية بالتص العام 45 قبل الميلاد. من
                    كتاب “حول أقاصي الخير والشر” "
            />
          </Col>
          <Col lg={6}>
            <ServicesCard
              title="حل مشكـــــــــلات"
              desc="لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل
                    ليتصور طريقه وضع وضع النصوص النهائية المطلوبة للتصميم ويقول"
            />
          </Col>
          <Col lg={6}>
            <ServicesCard
              title="حل مشكـــــــــلات"
              desc="لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل
                    ليتصور طريقه وضع وضع النصوص النهائية المطلوبة للتصميم ويقول
                    البعض ان وضع النصوص التجريبية بالتص العام 45 قبل الميلاد. من
                    كتاب “حول أقاصي الخير والشر” "
            />
          </Col>
          <Col lg={6}>
            <ServicesCard
              title="حل مشكـــــــــلات"
              desc="لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل
                    ليتصور طريقه وضع وضع النصوص النهائية المطلوبة للتصميم ويقول
                    البعض ان وضع النصوص التجريبية بالتص العام 45 قبل الميلاد. من
                    كتاب “حول أقاصي الخير والشر” "
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
