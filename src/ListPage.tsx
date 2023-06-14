import React from 'react';
import { Link } from 'react-router-dom';

const ListPage = () => {
  return (
    <div>
        <h2>LISTA</h2>
        <Link to="/detail/1">Ir a detalles</Link>
    </div>
  );
};

export default ListPage;
