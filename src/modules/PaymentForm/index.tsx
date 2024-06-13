import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useLocation, useParams } from 'react-router-dom';

export const PaymentForm: React.FC = () => {
  const { state } = useLocation();
  const { pay_id, total, title } = state;
  const { serviceId } = useParams();
  console.log(serviceId);
  useEffect(() => {
    Moyasar.init({
      element: '.mysr-form',
      amount: parseInt(total) * 100,
      currency: 'SAR',
      description: 'Payment for service',
      publishable_api_key: 'pk_test_xgtrusY76nn4CCAjDgxzg5Nbq89neuCRJauePtw2',
      callback_url:
        'http://localhost:5173/payment?payId=' +
        pay_id +
        '&serviceId=' +
        serviceId,
      methods: ['creditcard'],
    });
  }, []);

  return (
    <main className="default_page">
      <Container>
        <h1 className="title text-center">{title}</h1>
        <form className="mysr-form"></form>
      </Container>
    </main>
  );
};
