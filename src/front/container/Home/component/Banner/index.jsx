import React from 'react';
import style from './style.module.scss';
import avatar from './avatar.png';

const Banner = () => {
  return (
    <div className="wrapper">
      <div className={style.banner}>
        <div className={style.person}>
          <img src={avatar} alt="avatar" className={style.avatar} />
          <div className={style.title}>Jamie</div>
          <div className={style.description}>Jamie Blog</div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
