// import Swiper core and required modules
import { Pagination , Autoplay } from 'swiper/modules';
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


type slide = {
  id : number
  image : string
  title : string
  content : string
}
type props = {
  data : slide[]
}

export const Hero = ({data} : props) => {
  const { t, i18n } = useTranslation();

  if (data.length === 0) return;

  return (
    <main className={styles.hero}>
      <Container>
        <Swiper
          className="heroSwiper"
          key={i18n.language}
          modules={[ Autoplay, Pagination]}
          dir={i18n.language === 'en' ? undefined : 'rtl'}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {data.map((item) => (
          <SwiperSlide key={item.id}>
            <Row className="">
              <Col lg={6}>
                <h1 className={styles.title}>{item.title}</h1>
                <p className={styles.desc}>{item.content}</p>
                <Link
                  className={`link__ secondary__ main_rounded__ center_sm outline__ icon_dir ${styles.link}`}
                  to="/about-us"
                >
                  {t('knowMoreAboutUs')}
                  <FaArrowLeft />
                </Link>
              </Col>
              <Col lg={6}>
                <Image src={item.image} center />
              </Col>
            </Row>
          </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </main>
  );
};
