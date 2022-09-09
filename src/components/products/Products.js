import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../redux/home';
import Product from './Product';
import './Product.css';

const ProductList = () => {
  const dispatch = useDispatch();
  const Products = useSelector((state) => state.products);
  const filtered = useSelector((state) => state.filtered);

  useEffect(() => {
    if (Products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [Products.length, dispatch]);

  return (
    <>
      <div>
        {filtered.length === 0 && (
          <div className="product-container">
            {Products.map((products) => (
              <Product
                key={products.id}
                id={products.id}
                title={products.title}
                image={products.image}
                price={products.price}
                category={products.category}
                description={products.description}
                rating={products.rating.rate}
              />
            ))}
          </div>
        )}
        {filtered && (
          <div className="product-container">
            {filtered.map((products) => (
              <Product
                key={products.id}
                id={products.id}
                title={products.title}
                image={products.image}
                price={products.price}
                category={products.category}
                description={products.description}
                rating={products.rating.rate}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ProductList;
