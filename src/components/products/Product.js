/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
  const {
    id, title, image, price, category,
  } = props;

  return (
    <div className="four wide column" key={id}>
      <Link to={`/${id}`} state={{ id: `${id}` }}>
        <div className="ui link cards">
          <div className="card">
            <div className="image">
              <img src={image} alt={title} />
            </div>
            <div className="content">
              <div className="header">{title}</div>
              <div className="meta price">
                $
                {' '}
                {price}
              </div>
              <div className="meta">{category}</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
