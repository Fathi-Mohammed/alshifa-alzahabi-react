import { Col, Container, Row } from 'react-bootstrap';
import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';
import { FaArrowLeft } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

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
            <div className={styles.servicesCard}>
              <h3 className={styles.cardTitle}>حل مشكـــــــــلات</h3>
              <p className={styles.cardDesc}>
                لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل
                ليتصور طريقه وضع وضع النصوص النهائية المطلوبة للتصميم ويقول
                البعض ان وضع النصوص التجريبية بالتص العام 45 قبل الميلاد. من
                كتاب “حول أقاصي الخير والشر”{' '}
              </p>
              <Link
                className={`link__ secondary__ main_rounded__ center_sm outline__ icon_dir ${styles.link}`}
                to="/about-us"
              >
                حل مشكلتك الآن
                <FaArrowLeft />
              </Link>
            </div>
          </Col>
          <Col lg={6}>
            <div className={styles.servicesCard}>
              <h3 className={styles.cardTitle}>حل مشكـــــــــلات</h3>
              <p className={styles.cardDesc}>
                لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل
                ليتصور طريقه وضع وضع النصوص النهائية المطلوبة للتصميم ويقول
                البعض ان وضع النصوص التجريبية بالتص العام 45 قبل الميلاد. من
                كتاب “حول أقاصي الخير والشر”{' '}
              </p>
              <Link
                className={`link__ secondary__ main_rounded__ center_sm outline__ icon_dir ${styles.link}`}
                to="/about-us"
              >
                حل مشكلتك الآن
                <FaArrowLeft />
              </Link>
            </div>
          </Col>
          <Col lg={6}>
            <div className={styles.servicesCard}>
              <h3 className={styles.cardTitle}>حل مشكـــــــــلات</h3>
              <p className={styles.cardDesc}>
                لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل
                ليتصور طريقه وضع وضع النصوص النهائية المطلوبة للتصميم ويقول
                البعض ان وضع النصوص التجريبية بالتص العام 45 قبل الميلاد. من
                كتاب “حول أقاصي الخير والشر”{' '}
              </p>
              <Link
                className={`link__ secondary__ main_rounded__ center_sm outline__ icon_dir ${styles.link}`}
                to="/about-us"
              >
                حل مشكلتك الآن
                <FaArrowLeft />
              </Link>
            </div>
          </Col>
          <Col lg={6}>
            <div className={styles.servicesCard}>
              <h3 className={styles.cardTitle}>حل مشكـــــــــلات</h3>
              <p className={styles.cardDesc}>
                لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل
                ليتصور طريقه وضع وضع النصوص النهائية المطلوبة للتصميم ويقول
                البعض ان وضع النصوص التجريبية بالتص العام 45 قبل الميلاد. من
                كتاب “حول أقاصي الخير والشر”{' '}
              </p>
              <Link
                className={`link__ secondary__ main_rounded__ center_sm outline__ icon_dir ${styles.link}`}
                to="/about-us"
              >
                حل مشكلتك الآن
                <FaArrowLeft />
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
