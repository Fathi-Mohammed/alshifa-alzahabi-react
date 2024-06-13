import { Image } from '@/shared/components';
import React, { useState } from 'react';
import MainImage from '@/assets/images/shapes/shareOrder.png';
import { Col, Container, Row } from 'react-bootstrap';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import styles from './styles.module.scss';
import useApi from '@/shared/hooks/useApi';
import { toast } from 'react-toastify';
import { ImageUpload } from './ImageUpload';

export const ShareOrder: React.FC = () => {
  const [formData, setFormData] = useState<any>({
    goal: '',
    description: '',
    title: '',
    image: null,
  });
  const { orderId } = useParams();
  const {
    state: { answers },
  } = useLocation();

  const navigate = useNavigate();

  const { mutateAsync } = useApi.post(
    '/orders/' + orderId + '/answers',
    {
      answers,
      is_share: 1,
      forum: formData,
    },
    { headers: { 'Content-Type': 'multipart/form-data' } },
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await mutateAsync();
      toast.success(res.message);
      navigate('/', { replace: true });
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const newFormData = new FormData();
    newFormData.append('image', e.target.files[0]);
    setFormData({ ...formData, image: newFormData });
  };
  return (
    <main className="default_page">
      <Container>
        <Row>
          <Col xs={6}>
            <form onSubmit={handleSubmit}>
              <span className={styles.label}>
                ما الهدف من مشاركة مشكلتك مع الجمهور ؟
              </span>
              <input
                type="text"
                name="goal"
                onChange={handleInputChange}
                placeholder="الهدف"
                className="input"
                required
              />
              <span className={styles.label}>عنوان المشكلة</span>
              <input
                type="text"
                name="title"
                onChange={handleInputChange}
                placeholder="عنوان المشكلة"
                className="input"
                required
              />
              <span className={styles.label}>نص المشكلة</span>
              <textarea
                name="description"
                onChange={handleInputChange}
                placeholder="نص المشكلة"
                className={'input mb-5 ' + styles.textarea}
                required
              />
              <ImageUpload />

              <button
                type="submit"
                className="link__ primary__ full_width main_rounded__ mt-5"
              >
                ارسال
              </button>
            </form>
          </Col>
          <Col xs={6}>
            <Image src={MainImage} onChange={handleFileChange} alt="" />
          </Col>
        </Row>
      </Container>
    </main>
  );
};
