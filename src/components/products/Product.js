/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
  const {
    id, title, image, price,
  } = props;

  return (
    <div className="four wide column" key={id}>
      <Link to={`/${id}`} state={{ id: `${id}` }}>
        <div className="ui link cards">
          <div className="card">
            <div className="main-image">
              <img src={image} alt={title} className="main-image" />
            </div>
            <div className="content">
              <div className="header">{title}</div>
              <div className="price">
                $
                {' '}
                {price}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
