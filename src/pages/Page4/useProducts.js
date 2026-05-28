import { useEffect, useReducer } from 'react';
import { productReducer, PRODUCT_ACTIONS, initialState } from './productReducer.js';
import { fetchJson } from '@api/fetchJson.js';
import { logErr } from '@utils/log.js';
import { PRODUCTS_PATH } from '@constants/index.js';
const TIMEOUT = 5000;

const validateProducts = (data) => {
  if (data === null) throw new Error('no data');
  if (!Array.isArray(data)) throw new Error('data must be array');
  return data.filter(isValidProduct);
};

const isValidProduct = (item) => {
  return (
    typeof item === 'object' &&
    item !== null &&
    typeof item.id === 'number' &&
    typeof item.name === 'string' &&
    typeof item.price === 'number' &&
    typeof item.image === 'string'
  );
};
export const useProducts = () => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  useEffect(() => {
    let isMounted = true; // 過剰対策かもしれないけど、このロジックは残しときます。
    let isTimeout = false;

    const controller = new AbortController();

    const timeoutId = setTimeout(() => {
      isTimeout = true;
      controller.abort();
    }, TIMEOUT);

    const loadProducts = async () => {
      try {
        dispatch({ type: PRODUCT_ACTIONS.FETCH_START });

        const data = await fetchJson(PRODUCTS_PATH, controller.signal);
        const validProducts = validateProducts(data);

        if (isMounted) {
          dispatch({ type: PRODUCT_ACTIONS.FETCH_SUCCESS, payload: validProducts });
        }
      } catch (err) {
        if (err.name === 'AbortError') {
          if (isTimeout) dispatch({ type: PRODUCT_ACTIONS.FETCH_TIMEOUT });
          return;
        }
        if (isMounted) {
          dispatch({ type: PRODUCT_ACTIONS.FETCH_ERROR, payload: '通信エラーが発生しました' });
        }
        logErr(err, 'useProducts');
      } finally {
        clearTimeout(timeoutId);
      }
    };

    loadProducts();

    return () => {
      clearTimeout(timeoutId);
      controller.abort();
      isMounted = false;
    };
  }, []);

  return { state };
};
