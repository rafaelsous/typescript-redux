import React, { useEffect, useState } from 'react';

import api from '../services/api';

import { IProduct } from '../store/modules/cart/types';

import '../styles/components/catalog.css';
import CatalogItem from './CatalogItem';

const Catalog: React.FC = () => {
  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get('/products').then(response => {
      setCatalog(response.data);
    });
  }, []);

  return (
    <main id="catalog-page">
      <h1 className="title">Catalog</h1>

      { catalog.map(product => (
        <CatalogItem key={product.id} product={product} />
      )) }
    </main>
  );
}

export default Catalog;