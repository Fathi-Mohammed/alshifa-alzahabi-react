import React from 'react';
import { CommentsForm } from './CommentsForm';
import { CommentsWrapper } from './CommentsWrapper';
import { Loader } from '@/shared/components';

type Props = {
  isLoading: boolean;
  comments: any;
  refetch: any;
};

export const Comments: React.FC<Props> = ({ refetch, isLoading, comments }) => {
  if (isLoading) return <Loader visible={isLoading} />;
  return (
    <>
      <CommentsForm refetch={refetch} />
      <CommentsWrapper comments={comments} />
    </>
  );
};
