import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IProduct } from '../store/modules/cart/types';
import { addProductToCartRequest } from '../store/modules/cart/actions';
import { IState } from '../store';

interface ICatalogItemProps {
  product: IProduct;
}

const CatalogItem: React.FC<ICatalogItemProps> = ({ product }) => {
  const dispatch = useDispatch();

  const hasFailedCheckStock = useSelector<IState, boolean>(state => {
    return state.cart.failedCheckStock.includes(product.id);
  });

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCartRequest(product));
  }, [dispatch, product]);

  return (
    <article key={product.id}>
      <strong>{product.title}</strong> {' - '}
      <span>{product.price}</span>{' '}
      <button
        type="button"
        onClick={handleAddProductToCart}
        >
        Comprar
      </button>

      { hasFailedCheckStock && <span style={{ color: 'red' }}>Unavailable product</span> }
    </article>
  );
};

export default CatalogItem;
