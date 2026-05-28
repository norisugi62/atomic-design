import { useParams, useNavigate, useOutletContext } from 'react-router-dom';
import { logErr } from '@utils/log.js';
import { NO_IMAGE_PATH } from '@constants/path.js';

const validateProduct = (item) => {
  if (typeof item !== 'object' || item === null) throw new Error('invalid product object');
  if (typeof item.id !== 'number') throw new Error('invalid product id');
  if (typeof item.name !== 'string') throw new Error('invalid product name');
  if (typeof item.price !== 'number') throw new Error('invalid product price');
  if (typeof item.category !== 'string') throw new Error('invalid product category');
  if (typeof item.stock !== 'number') throw new Error('invalid product stock');
  if (typeof item.rating !== 'number') throw new Error('invalid product rating');
  if (typeof item.description !== 'string') throw new Error('invalid product description');
  if (typeof item.image !== 'string') throw new Error('invalid product image');
  if (typeof item.isFeatured !== 'boolean') throw new Error('invalid product isFeatured');
  return item;
};

export const useProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, basePath } = useOutletContext();
  const handleOnBack = () => navigate(basePath);
  const handleOnImageError = (e) => {
    e.target.onerror = null;
    e.target.src = NO_IMAGE_PATH;
  };

  const item = data.find((product) => product.id === Number(id));
  let validItem;

  try {
    if (!item) throw new Error(`product not found: ${id}`);
    validItem = validateProduct(item);
  } catch (err) {
    logErr({ err, place: 'useProduct' });
    validItem = null;
  }

  return { item: validItem, handleOnBack, handleOnImageError };
};
