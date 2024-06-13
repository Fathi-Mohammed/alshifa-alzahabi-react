import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from './styles.module.scss';
import { Image } from '@/shared/components';
// import CommentImg from '@/assets/images/blog/01.png';

type props = {
  comments: any;
};

export const CommentsWrapper: React.FC<props> = ({ comments }) => {
  return (
    <Row className="row_modify with_row_gap">
      {comments &&
        comments?.map(({ comment, created_at, id, user: { name } }: any) => (
          <Col key={id} lg={6}>
            <div className={styles.comment}>
              <div className={styles.cardHead}>
                <div className={styles.imgWrapper}>
                  <Image src="" asp={100} />
                </div>
                <div>
                  <h3 className={styles.title}>{name}</h3>
                  <p className={styles.time}>{created_at}</p>
                </div>
              </div>
              <p className={styles.desc}>{comment}</p>
            </div>
          </Col>
        ))}
    </Row>
  );
};
