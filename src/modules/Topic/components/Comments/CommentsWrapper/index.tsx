import { Col, Row } from 'react-bootstrap';
import styles from './styles.module.scss';
import { Image } from '@/shared/components';
import CommentImg from '@/assets/images/blog/01.png';

export const CommentsWrapper = () => {
  return (
    <Row>
      <Col lg={6}>
        <div className={styles.comment}>
          <div className={styles.cardHead}>
            <div className={styles.imgWrapper}>
              <Image src={CommentImg} asp={100} />
            </div>
            <div className={styles.info}>
              <h3 className={styles.title}>مشكلة عائلية</h3>
              <p className={styles.time}>5/3/2024</p>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};
