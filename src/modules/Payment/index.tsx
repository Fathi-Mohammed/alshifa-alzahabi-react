import useApi from '@/shared/hooks/useApi';
import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const Payment: React.FC = () => {
  const searchParams = new URLSearchParams(window.location.search);

  const navigate = useNavigate();

  const payId = searchParams.get('payId');
  const id = searchParams.get('id');
  const status = searchParams.get('status');
  const amount = searchParams.get('amount');
  const message = searchParams.get('message');
  const serviceId = searchParams.get('serviceId');
  console.log(serviceId);

  const { isSuccess, data, isLoading, isError, error }: any = useApi.get(
    `callback/${payId}?id=${id}&status=${status}&amount=${amount}&message=${message}`,
  );

  useEffect(() => {
    if (isSuccess) {
      toast.success(data.message);
      navigate('/multi-step/' + serviceId, { replace: true });
    }

    if (isError) {
      toast.error(error.response.data.message);
      navigate('/', { replace: true });
    }
  });
  return (
    <main className="default_page">
      <Container>
        <h1>Payment</h1>

        {isLoading && <h1>Loading...</h1>}
      </Container>
    </main>
  );
};
