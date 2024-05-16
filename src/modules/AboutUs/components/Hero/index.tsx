// import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';
import PointShape from '@/assets/images/shapes/aboutUsPointShape.svg';
import { Image } from '@/shared/components';

type Ifeatures = {
  id: number;
  title: string;
};

type Idata = {
  imageOne: string;
  imageTwo: string;
  title: string;
  content: string;
  features: Ifeatures[];
};

type Iprops = {
  data: Idata;
};

export const Hero = ({ data: { imageOne, imageTwo, title, content, features } }: Iprops) => {
  const { t } = useTranslation();
  return (
    <main className={`${styles.aboutSec} default_section`}>
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
            <div className={styles.pointsWrapper}>
              {features?.map((item) => (
                <div key={item.id} className={styles.point}>
                  <img src={PointShape} alt="" />
                  <p>{item.title}</p>
                </div>
              ))}
            </div>
          </Col>
          <Col lg={6}>
            <div className={styles.imagesWrapper}>
              <div className={styles.firstImage}>
                <Image src={imageOne || ''} asp={122.2222} />
              </div>

              <div className={styles.secondImage}>
                <Image src={imageTwo || ''} asp={142.307692} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
};
