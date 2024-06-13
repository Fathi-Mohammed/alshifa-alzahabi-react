import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { ProblemCard } from '../ProblemCard';
import useApi from '@/shared/hooks/useApi';
import { useTranslation } from 'react-i18next';

export const SolvedSection: React.FC = () => {
  const { t } = useTranslation();
  const { data, isLoading }: any = useApi.get(
    import.meta.env.VITE_FORUMS + '?is_solved=1',
  );

  if (data?.data?.length === 0) return null;
  return (
    <>
      <div className="page_head_wrapper">
        <h2 className="page_main_title__">{t('newSolvedTopics')}</h2>
      </div>

      <Row>
        {!isLoading &&
          data?.data?.map((item) => (
            <Col key={item.id} lg={4}>
              <ProblemCard data={item} />
            </Col>
          ))}
      </Row>
    </>
  );
};
