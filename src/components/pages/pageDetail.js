import React from 'react';
import { useParams } from 'react-router-dom';
import ItemDetailContainer from '../components/ItemDetailContainer.jsx';

const DetailPage = () => {
  let { id } = useParams();

  return (
    <main>
      <ItemDetailContainer id={id} />
    </main>
  );
};

export default DetailPage;
