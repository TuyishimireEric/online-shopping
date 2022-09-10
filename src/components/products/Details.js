import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';
import './Product.css';
import back from '../../images/previous.png';

const Details = () => {
  const { state } = useLocation();
  const Products = useSelector((state) => state.products);
  const products = Products.filter((products) => products.id === parseInt(state.id, 10));
  return (
    <>
      <div className="ui placeholder segment">
        <div className="ui two column stackable center aligned grid">
          <div className="ui vertical divider">AND</div>
          <div className="middle aligned row">
            <div className="column lp">
              <Link to="/" className="back">
                <img className="back-icon" src={back} alt="back" />
              </Link>
              <img className="ui fluid image" src={products[0].image} alt={products[0].title} />
            </div>
            <div className="column rp">
              <h1>{products[0].title}</h1>
              <h2>
                <div className="ui teal tag label">
                  $
                  {products[0].price}
                </div>
              </h2>
              <h3 className="ui brown block header">{products[0].category}</h3>
              <p className="description">{products[0].description}</p>
              <div className="ui vertical animated button">
                <div className="visible content">Add to Cart</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
