/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchProduct } from '../../redux/home';
import logo from '../../images/logo.png';
import search from '../../images/search.png';
import './Header.css';

const Navbar = () => {
  const [setMessage] = useState('');
  const dispatch = useDispatch();
  const onChangeHandler = (e) => {
    dispatch(searchProduct(e.target.value));
  };

  const onClickHandler = () => {
    dispatch(searchProduct(''));
    setMessage('');
  };

  return (
    <div className="ui fixed menu">
      <div className="navBar">
        <div className="nav-title">
          <img src={logo} alt="logo" />
          <h1 className="web-name">Online shopping</h1>
        </div>
        <div className="search">
          <input placeholder="Search..." onChange={onChangeHandler} />
          <Link to="/" className="link">
            <button type="submit" onClick={onClickHandler}>
              <img src={search} alt="logo" />
              <p>Search</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
