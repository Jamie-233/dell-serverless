import React from 'react';
import style from './style.module.scss';
import avatar from './avatar.png';

const Banner = () => {
    return (
        <div className='wraper'>
            <div className={style.banner}>
                <div className={style.person}>
                    <img src={avatar} alt='avatar' className={style.avatar} />
                    <div className={style.title}>Jenkin</div>
                    <div className={style.description}>Jenkin Blog</div>
                </div>
            </div>
        </div>
    )
}

export default Banner;