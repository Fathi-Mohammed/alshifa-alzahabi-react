import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Image } from '@/shared/components';
import { Col, Container, Row } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa6';
// import PointShape from '@/assets/images/shapes/aboutUsPointShape.svg?react';
import type { about } from '@/shared/model/Home';
import styles from './styles.module.scss';

type props = {
  data?: about;
};

export const AboutUs: React.FC<props> = ({ data }) => {
  const { t } = useTranslation();
  const { image, imageTwo, title, content } = data || {};

  return (
    <section className={`${styles.aboutSec} default_section`}>
      <Container>
        <Row className="row_modify with_row_gap">
          <Col lg={6}>
            <div className="section_head_wrapper">
              <h2 className="section_main_title__">
                {t('aboutUsSectionTitle')}
              </h2>
            </div>
            <p className={styles.mainDesc}>{title}</p>
            <p className={styles.desc}>{content}</p>
            {/* <div className={styles.pointsWrapper}>
              {features?.map((item) => (
                <div key={item.id} className={styles.point}>
                  <PointShape />
                  <p>{item.title}</p>
                </div>
              ))}
            </div> */}
            <Link
              className={`link__ secondary__ main_rounded__ center_sm outline__ icon_dir ${styles.link}`}
              to="/about-us"
            >
              {t('knowMoreAboutUs')}
              <FaArrowLeft />
            </Link>
          </Col>
          <Col lg={6}>
            <div className={styles.imagesWrapper}>
              <div className={styles.firstImage}>
                <Image src={image || ''} asp={122.2222} />
              </div>
              <div className={styles.secondImage}>
                <Image src={imageTwo || ''} asp={142.307692} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
