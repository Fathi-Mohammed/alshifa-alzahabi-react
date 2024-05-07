// import Swiper core and required modules
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Image } from '@/shared/components';
import { FaArrowLeft } from 'react-icons/fa6';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from './styles.module.scss';

import HeroImage from '@/assets/images/hero/hero.png';

export const Hero = () => {



  const { t, i18n } = useTranslation();
  return (
    <main className={styles.hero}>
      <Container>
        <Swiper
          className="heroSwiper"
          key={i18n.language}
          modules={[Pagination]}
          dir={i18n.language === 'en' ? undefined : 'rtl'}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <Row className="">
              <Col lg={6}>
                <h1 className={styles.title}>{t('hero.title')}</h1>
                <p className={styles.desc}>{t('hero.desc')}</p>
                <Link
                  className={`link__ secondary__ main_rounded__ center_sm outline__ icon_dir ${styles.link}`}
                  to="/about-us"
                >
                  تعرف علينا أكثر
                  <FaArrowLeft />
                </Link>
              </Col>
              <Col lg={6}>
                <Image src={HeroImage} center />
              </Col>
            </Row>
          </SwiperSlide>
        </Swiper>
      </Container>
    </main>
  );
};
