import { Col, Row } from 'react-bootstrap';
import styles from './styles.module.scss';
import { Image } from '@/shared/components';
import CommentImg from '@/assets/images/blog/01.png';

export const CommentsWrapper = () => {
  return (
    <Row className='row_modify with_row_gap'>
      <Col lg={6}>
        <div className={styles.comment}>
          <div className={styles.cardHead}>
            <div className={styles.imgWrapper}>
              <Image src={CommentImg} asp={100} />
            </div>
            <div>
              <h3 className={styles.title}>عبد العزيز سليمان</h3>
              <p className={styles.time}>5/3/2024</p>
            </div>
          </div>
          <p className={styles.desc}>
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم إذا كنت
            تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة صورة
            حقيقية لتصميم الموقع.
          </p>
        </div>
      </Col>
      <Col lg={6}>
        <div className={styles.comment}>
          <div className={styles.cardHead}>
            <div className={styles.imgWrapper}>
              <Image src={CommentImg} asp={100} />
            </div>
            <div>
              <h3 className={styles.title}>عبد العزيز سليمان</h3>
              <p className={styles.time}>5/3/2024</p>
            </div>
          </div>
          <p className={styles.desc}>
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم إذا كنت
            تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة صورة
            حقيقية لتصميم الموقع.
          </p>
        </div>
      </Col>
      <Col lg={6}>
        <div className={styles.comment}>
          <div className={styles.cardHead}>
            <div className={styles.imgWrapper}>
              <Image src={CommentImg} asp={100} />
            </div>
            <div>
              <h3 className={styles.title}>عبد العزيز سليمان</h3>
              <p className={styles.time}>5/3/2024</p>
            </div>
          </div>
          <p className={styles.desc}>
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم إذا كنت
            تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة صورة
            حقيقية لتصميم الموقع.
          </p>
        </div>
      </Col>
      <Col lg={6}>
        <div className={styles.comment}>
          <div className={styles.cardHead}>
            <div className={styles.imgWrapper}>
              <Image src={CommentImg} asp={100} />
            </div>
            <div>
              <h3 className={styles.title}>عبد العزيز سليمان</h3>
              <p className={styles.time}>5/3/2024</p>
            </div>
          </div>
          <p className={styles.desc}>
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم إذا كنت
            تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة صورة
            حقيقية لتصميم الموقع.
          </p>
        </div>
      </Col>
    </Row>
  );
};
