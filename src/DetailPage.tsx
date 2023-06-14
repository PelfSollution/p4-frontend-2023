import React from 'react';
import { useParams } from 'react-router-dom';

const DetailPage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h2>DETALLES</h2>
      <p>ID: {id}</p>
    </div>
  );
};

export default DetailPage;
