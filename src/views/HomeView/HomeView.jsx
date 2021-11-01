import React from 'react';
import s from '../HomeView/HomeView.module.css';

const HomeView = () => (
  <div className="home-container">
    <h1 className="title-home">Welcome to registration in PhoneBook</h1>
    <img
      src="https://cdn-icons-png.flaticon.com/512/2015/2015040.png"
      alt="phonebook"
      className={s.image}
    />
  </div>
);

export default HomeView;
